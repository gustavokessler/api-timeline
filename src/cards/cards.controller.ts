/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) { }

  @Post()
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardsService.create(createCardDto);
  }

  @Get()
  findAll(@Query('professorId') id: string) {
    return this.cardsService.findAll(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('professorId') professorId: string) {
    return this.cardsService.findOne(+id, +professorId);
  }

  @Patch(':id')
  update(@Body() CardDto: UpdateCardDto) {
    return this.cardsService.update(CardDto.id, CardDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardsService.remove(+id);
  }
}
