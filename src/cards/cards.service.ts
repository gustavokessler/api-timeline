import { CreateCardDto } from './dto/create-card.dto';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateCardDto } from './dto/update-card.dto';
import { constants } from 'src/shared/constants/constants';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';
import { from, map } from 'rxjs';

@Injectable()
export class CardsService {

  constructor(
    @Inject(constants.CARDS_REPOSITORY)
    private cardRepository: Repository<Card>
  ){}

  create(createCardDto: CreateCardDto) {
    const card = this.cardRepository.create({
      name: createCardDto.name,
      date: createCardDto.date,
      description: createCardDto.description,
      image: createCardDto.image,
    })

    console.log(card);

    return from(this.cardRepository.insert(card)).pipe(
      map(() => {
        return card
      })
    );
  }

  findAll() {
    return `This action returns all cards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
