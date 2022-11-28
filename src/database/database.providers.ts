import { Connection, createConnection } from 'typeorm';

import { ConfigService } from '@nestjs/config';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { Provider } from '@nestjs/common';
import { constants } from '../shared/constants/constants';

export const databaseProviders: Provider[] = [
  {
    provide: constants.DATABASE_CONNECTION,
    useFactory: (configService: ConfigService): Promise<Connection> => {
      return createConnection(configService.get<MysqlConnectionOptions>('ormConfig'));
    },
    inject: [ConfigService],
  },
];
