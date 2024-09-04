import { Module } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './entities/site.entity';
import { ClientsModule } from '@nestjs/microservices';
import { rabbitMQConfig } from '@/config/rabbitmq';

@Module({
  imports: [
    TypeOrmModule.forFeature([Site]),
    ClientsModule.register([rabbitMQConfig]),
  ],
  controllers: [SiteController],
  providers: [SiteService],
})
export class SiteModule {}
