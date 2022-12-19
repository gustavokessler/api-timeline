import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { DeckService } from './deck.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post()
  create(@Body() createDeckDto: CreateDeckDto) {
    return this.deckService.create(createDeckDto);
  }

  @Get()
  findAll(@Query('professorId') professorId: string) {
    return this.deckService.findAll(+professorId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deckService.findOne(+id);
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
