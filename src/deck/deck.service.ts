import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { from, map } from 'rxjs';
import { constants } from 'src/shared/constants/constants';
import { QueryBuilder, Repository } from 'typeorm';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { Deck, DeckCards } from './entities/deck.entity';

@Injectable()
export class DeckService {

  constructor(
    @Inject(constants.DECK_REPOSITORY)
    private deckRepository: Repository<Deck>,
    @Inject(constants.DECK_CARDS_REPOSITORY)
    private deckCardsRepository: Repository<DeckCards>
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

    return this.deckRepository.find({
      where: { professorId: professorId },
      relations: {
        card: true
      }
    });
  }

  findOne(id: number, professorId: number) {
    return from(this.deckRepository.findOneOrFail({
      where: { id: id, professorId: professorId },
      relations: { card: true }
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

}
