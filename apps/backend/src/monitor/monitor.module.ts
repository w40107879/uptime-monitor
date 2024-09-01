import { Module } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { MonitorController } from './monitor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monitor } from './entities/monitor.entity';
import { Site } from '../site/entities/site.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forFeature([Monitor, Site]),
    ScheduleModule.forRoot(),
  ],
  controllers: [MonitorController],
  providers: [MonitorService],
})
export class MonitorModule {}
