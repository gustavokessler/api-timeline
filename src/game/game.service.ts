import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { from } from 'rxjs';
import { constants } from 'src/shared/constants/constants';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {

  constructor(
    @Inject(constants.GAME_REPOSITORY)
    private gameRepository: Repository<Game>
  ){}

  create(createGameDto: CreateGameDto) {
    return 'This action adds a new game';
  }

  findAll() {
    return `This action returns all game`;
  }

  findOne(uid: string) {
    return from(this.gameRepository.findOneOrFail({
      where: { uid},
      relations: ['deck', 'deck.cards']
    }).catch((er) => {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }))
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
