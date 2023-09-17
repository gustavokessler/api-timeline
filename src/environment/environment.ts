import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const ormConfigFactory: () => MysqlConnectionOptions = () => ({
  type: process.env.TYPEORM_CONNECTION as "mysql",
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME, // TODO DEPOIS MUDAR ISSO AQUI PARA O TIMELINE
  password: process.env.DATABASE_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ["dist/**/*.entity{.ts,.js}"],
  autoLoadEntities: true,
  isGenerated: true,
  generationStrategy: "increment",
  extra: {
    connectionLimit: 10,
  },
});
