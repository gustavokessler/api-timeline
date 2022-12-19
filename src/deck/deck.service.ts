import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { constants } from 'src/shared/constants/constants';
import { Repository } from 'typeorm';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { Deck } from './entities/deck.entity';

@Injectable()
export class DeckService {

  constructor(
    @Inject(constants.DECK_REPOSITORY)
    private deckRepository: Repository<Deck>
  ){}

  create(createDeckDto: CreateDeckDto) {
    return 'This action adds a new deck';
  }

  findAll() {
    return this.deckRepository.find({
      relations: {
        card: true
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} deck`;
  }

  update(id: number, updateDeckDto: UpdateDeckDto) {
    return `This action updates a #${id} deck`;
  }

  remove(id: number) {
    return `This action removes a #${id} deck`;
  }
}
