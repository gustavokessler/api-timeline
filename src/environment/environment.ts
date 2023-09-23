import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const ormConfigFactory: () => MysqlConnectionOptions = () => ({
  type: "mysql",
  host: process.env.TYPEORM_HOST,
  port: 3306,
  username: process.env.TYPEORM_USERNAME, // TODO DEPOIS MUDAR ISSO AQUI PARA O TIMELINE
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ["dist/**/*.entity{.ts,.js}"],
  autoLoadEntities: true,
  migrationsRun: false,
  isGenerated: true,
  generationStrategy: "increment",
  logging: true,
  extra: {
    connectionLimit: 10,
  },
});
