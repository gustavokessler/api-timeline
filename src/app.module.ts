/* eslint-disable prettier/prettier */
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CardsModule } from './cards/cards.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { DeckModule } from './deck/deck.module';

@Module({
  imports: [AuthModule, CardsModule, ConfigModule, DeckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
