/* eslint-disable prettier/prettier */
import { CreateCardDto } from './dto/create-card.dto';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UpdateCardDto } from './dto/update-card.dto';
import { constants } from 'src/shared/constants/constants';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';
import { catchError, from, map, of } from 'rxjs';

@Injectable()
export class CardsService {

  constructor(
    @Inject(constants.CARDS_REPOSITORY)
    private cardRepository: Repository<Card>
  ) { }

  create(createCardDto: CreateCardDto) {
    const card = this.cardRepository.create({
      professorId: createCardDto.professorId,
      name: createCardDto.name,
      date: createCardDto.date,
      description: createCardDto.description,
      image: createCardDto.image,
    })

    return from(this.cardRepository.insert(card)).pipe(
      map(() => {
        return card
      })
    );
  }

  findAll(id: number) {
    if (!id) throw new HttpException('Not found', HttpStatus.NOT_FOUND)

    return from(this.cardRepository.find({
      where: { professorId: id }
    }).catch((err) => console.log(err)))
  }

  findOne(id: number, professorId: number) {
    if (!professorId) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return from(this.cardRepository.findOneOrFail({
      where: { id: id, professorId: professorId}
    }).catch(() => {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }))
  }

  update(id: number, card: UpdateCardDto) {
    
    return this.cardRepository.save({
      id: id,
      date: card.date,
      description: card.description,
      image: card.image,
      name: card.name
    })
  }

  remove(id: number) {

    return from(this.cardRepository.softDelete(id)).pipe(
      map((res) => {
        return 'deleted successeful'
      })
    );
  }
}
