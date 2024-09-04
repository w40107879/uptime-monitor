import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const rabbitMQConfig: ClientProviderOptions = {
  name: 'UPTIME_SERVICE',
  transport: Transport.RMQ,
  options: {
    urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
    queue: 'uptime_queue',
    queueOptions: {
      durable: false,
    },
  },
};
