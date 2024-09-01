import { Module } from '@nestjs/common';
import { SiteModule } from './site/site.module';
import { MonitorModule } from './monitor/monitor.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeorm from './config/typeorm';

@Module({
  imports: [
    SiteModule,
    MonitorModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
  ],
})
export class AppModule {}
