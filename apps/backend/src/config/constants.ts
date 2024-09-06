import { ConfigService } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const configService = new ConfigService();
export const jwtConstants = {
  secret: configService.get<string>('JWT_SECRET') || 'default_secret_key',
};

export const saltRounds = 10;
