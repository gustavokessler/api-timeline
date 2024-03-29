import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { CreateCardDto } from 'src/cards/dto/create-card.dto';
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
  addCartToDeck(@Param('id') id: string, @Body() body: {card: number}, @Query('professorId') professorId: string) {
    if (!professorId) return new HttpException('Not Found', HttpStatus.NOT_FOUND);

    return this.deckService.addCardToDeck(+id, body.card);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() createDeckDto: UpdateDeckDto) {
    console.log(createDeckDto);
    return this.deckService.update(id, createDeckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deckService.remove(+id);
  }


  @Delete('card/:id')
  removeCardFromDeck(@Param('id') deckId: string, @Query('cardId') card: string, @Query('professorId') professorId: string){
    if (!professorId) return new HttpException('Not Found', HttpStatus.NOT_FOUND);
    return this.deckService.removeCardFromDeck(+deckId, +card);
  }

  @Get('card/available/:id')
  getAvailableCards(@Param('id') deckId: string, @Query('professorId') professorId: string){
    if (!professorId) return new HttpException('Not Found', HttpStatus.NOT_FOUND);
    
    return this.deckService.getAvailableCards(+deckId, +professorId)
  }
  
  @Post('card/add/:id')
  addNewCardToDeck(@Param('id') deckId: string, @Body() card: CreateCardDto, @Query('professorId') professorId: string){
    if (!professorId) return new HttpException('Not Found', HttpStatus.NOT_FOUND);
    console.log(card)
    return this.deckService.addNewCardToDeck(+deckId, card)
  }

}
