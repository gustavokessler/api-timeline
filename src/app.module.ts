/* eslint-disable prettier/prettier */

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CardsModule } from './cards/cards.module';
import { ConfigModule } from './config/config.module';
import { DeckModule } from './deck/deck.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';

@Module({
  imports: [AuthModule, CardsModule, ConfigModule, DeckModule, GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
