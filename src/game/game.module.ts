import { DatabaseModule } from 'src/database/database.module';
import { DeckModule } from './../deck/deck.module';
import { GameController } from './game.controller';
import { GameProviders } from './game.providers';
import { GameService } from './game.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule, DeckModule],
  controllers: [GameController],
  providers: [GameService, ...GameProviders]
})
export class GameModule {}
