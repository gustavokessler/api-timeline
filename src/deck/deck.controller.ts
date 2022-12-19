import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { DeckService } from './deck.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) { }

  @Post()
  create(@Body() createDeckDto: CreateDeckDto) {
    return this.deckService.create(createDeckDto);
  }

  @Get()
  findAll(@Query('professorId') professorId: string) {
    return this.deckService.findAll(+professorId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('professorId') professorId: string) {
    if (!professorId) return new HttpException('Not Found', HttpStatus.NOT_FOUND);
    
    return this.deckService.findOne(+id, +professorId);
  }
  
  
  @Post('card/:id')
  addCartToDeck(@Param('id') id: string, @Body() cards: number[], @Query('professorId') professorId: string) {
    if (!professorId) return new HttpException('Not Found', HttpStatus.NOT_FOUND);

    return this.deckService.addCardToDeck(+id, cards);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeckDto: UpdateDeckDto) {
    return this.deckService.update(+id, updateDeckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deckService.remove(+id);
  }
}
