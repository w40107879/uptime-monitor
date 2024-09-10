import { Controller, Get, UseGuards } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { ApiOperation } from '@nestjs/swagger';
import { EventPattern } from '@nestjs/microservices';
import { MonitorStatusType, DoCheckType } from '@root/types/monitor';
import { AuthGuard } from '@nestjs/passport';

@Controller('monitor')
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/status')
  @ApiOperation({ summary: 'Get all monitor status' })
  public async getAllMonitorStatus(): Promise<MonitorStatusType[]> {
    return this.monitorService.getAllMonitorStatus();
  }

  @UseGuards(AuthGuard('jwt'))
  @EventPattern('add_site')
  public async doCheck(site: DoCheckType) {
    return this.monitorService.doCheck(site);
  }
}
