/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { from, map } from 'rxjs';
import { constants } from 'src/shared/constants/constants';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { ulid } from 'ulid'

@Injectable()
export class GameService {

  constructor(
    @Inject(constants.GAME_REPOSITORY)
    private gameRepository: Repository<Game>
  ){}

  create(createGameDto: CreateGameDto, professorId: number) {
    const game = this.gameRepository.create({
      deckId: +createGameDto.deckId,
      professorId: professorId,
      uid: ulid(),
      name: createGameDto.name

    })
    return from(this.gameRepository.insert(game)).pipe(
      map(() => game)
    )
  }

  findAll(professorId: number) {
    return from(this.gameRepository.find({
      where: { professorId},
      relations: ['deck', 'deck.cards']
    }).catch((er) => {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }))
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
