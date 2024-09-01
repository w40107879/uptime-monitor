import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const rabbitMQUrl = process.env.RABBITMQ_URL || 'amqp://localhost:5672';
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    name: 'UPTIME_SERVICE',
    transport: Transport.RMQ,
    options: {
      urls: [rabbitMQUrl],
      queue: 'uptime_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  // Swagger setting
  const config = new DocumentBuilder()
    .setTitle('Uptime Monitor API')
    .setDescription('API Description')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
