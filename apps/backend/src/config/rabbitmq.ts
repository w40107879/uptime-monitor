import { ConfigService } from '@nestjs/config';
import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const configService = new ConfigService();

export const rabbitMQConfig: ClientProviderOptions = {
  name: 'UPTIME_SERVICE',
  transport: Transport.RMQ,
  options: {
    urls: [
      configService.get<string>('RABBITMQ_URL') || 'amqp://localhost:5672',
    ],
    queue: 'uptime_queue',
    queueOptions: {
      durable: false,
    },
  },
};
