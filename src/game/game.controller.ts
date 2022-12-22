import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { tap } from 'rxjs';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto, @Query('professorId') professorId: string) {
    if (!professorId) return new HttpException('Not found', HttpStatus.NOT_FOUND)
    return this.gameService.create(createGameDto, +professorId);
  }

  @Get()
  findAll(@Query('professorId') professorId: string) {
    if (!professorId) return new HttpException('Not found', HttpStatus.NOT_FOUND)
    console.log('a')
    return this.gameService.findAll(+professorId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.update(+id, updateGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameService.remove(+id);
  }
}
