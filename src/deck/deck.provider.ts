import { Connection } from 'typeorm';
import { Deck } from './entities/deck.entity';
import { Provider } from "@nestjs/common";
import { constants } from "src/shared/constants/constants";

export const DeckProviders: Provider[] = [
  {
    provide: constants.DECK_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Deck),
    inject: [constants.DATABASE_CONNECTION]
  }
]