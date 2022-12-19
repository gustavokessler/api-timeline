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
  update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto, @Query('professorId') professorId: string) {
    if (updateCardDto.professorId != +professorId) return new HttpException('Not found', HttpStatus.NOT_FOUND)
    return this.cardsService.update(+id, updateCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardsService.remove(+id);
  }
}
