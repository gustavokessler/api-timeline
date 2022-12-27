/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { format } from 'path';
import { from, map, switchMap } from 'rxjs';
import { CardsService } from 'src/cards/cards.service';
import { CreateCardDto } from 'src/cards/dto/create-card.dto';
import { Card } from 'src/cards/entities/card.entity';
import { constants } from 'src/shared/constants/constants';
import { In, Not, QueryBuilder, Repository } from 'typeorm';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { Deck, DeckCards } from './entities/deck.entity';

@Injectable()
export class DeckService {

  constructor(
    @Inject(constants.DECK_REPOSITORY)
    private deckRepository: Repository<Deck>,
    @Inject(constants.DECK_CARDS_REPOSITORY)
    private deckCardsRepository: Repository<DeckCards>,
    @Inject(constants.CARDS_REPOSITORY)
    private cardRepository: Repository<Card>,
    private cardService: CardsService

  ) { }

  create(createDeckDto: CreateDeckDto) {
    const deck = this.deckRepository.create({
      professorId: createDeckDto.professorId,
      name: createDeckDto.name,
      description: createDeckDto.description,
    })
    return from(this.deckRepository.insert(deck)).pipe(
      map(() => {
        return deck
      })
    )
  }

  findAll(professorId: number) {

    if (!professorId) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);

    return from(this.deckRepository.find({
      where: {professorId: professorId},
      relations: {cards: true}
    }).catch((res) => console.log(res)));
  }

  findOne(id: number, professorId: number) {
    return from(this.deckRepository.findOneOrFail({
      where: { id: id, professorId: professorId },
      relations: { cards: true }
    }).catch(() => { throw new HttpException('Not Found', HttpStatus.NOT_FOUND) }));
  }

  update(id: number, updateDeckDto: UpdateDeckDto) {
    return `This action updates a #${id} deck`;
  }

  remove(id: number) {
    return `This action removes a #${id} deck`;
  }

  addCardToDeck(deck: number, card: number) {
    const deckCard = this.deckCardsRepository.create({
      cardId: card,
      deckId: deck
    })
    return from(this.deckCardsRepository.insert(deckCard)).pipe(
      map(() => {
        deckCard
      })
    )
  }

  getAvailableCards(deckId: number, professorId: number) {
    return from(this.findOne(deckId, professorId)).pipe(
      switchMap((deck) => {
        return this.cardRepository.find({
          where: {
            id: Not(In((deck.cards.map((card) => card.id)))),
          }
        })
      })
    )
  }

  removeCardFromDeck(deckId: number, cardId: number) {
    return from(this.deckCardsRepository.remove({
      cardId,
      deckId
    }))
  }

  addNewCardToDeck(deckId: number, card: CreateCardDto) {
    return this.cardService.create(card).pipe(
      switchMap((card) => {
        return this.addCardToDeck(deckId, card.id);
      })
    )
  }

}
