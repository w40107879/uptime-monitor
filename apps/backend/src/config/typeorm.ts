import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService, registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const configService = new ConfigService();

const config = {
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USERNAME'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  subscribers: ['dist/subscriber/**/*.ts'],
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
