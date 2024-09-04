import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { rabbitMQConfig } from '@/config/rabbitmq';
import { setupSwagger } from '@/config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(rabbitMQConfig);
  setupSwagger(app);

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
