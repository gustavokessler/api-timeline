import { DatabaseModule } from 'src/database/database.module';
import { DeckController } from './deck.controller';
import { DeckProviders } from './deck.provider';
import { DeckService } from './deck.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [DeckController],
  providers: [DeckService, ...DeckProviders]
})
export class DeckModule {}
