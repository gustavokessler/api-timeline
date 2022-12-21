import { Deck, DeckCards } from './entities/deck.entity';

import { Card } from 'src/cards/entities/card.entity';
import { Connection } from 'typeorm';
import { Provider } from "@nestjs/common";
import { constants } from "src/shared/constants/constants";

export const DeckProviders: Provider[] = [
  {
    provide: constants.DECK_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Deck),
    inject: [constants.DATABASE_CONNECTION]
  },
  {
    provide: constants.DECK_CARDS_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(DeckCards),
    inject: [constants.DATABASE_CONNECTION]
  },
  {
    provide: constants.CARDS_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Card),
    inject: [constants.DATABASE_CONNECTION]
  }
]