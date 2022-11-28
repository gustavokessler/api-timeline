import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule { }
