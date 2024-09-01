import { Controller, Get } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EventPattern } from '@nestjs/microservices';

@Controller('monitor')
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @Get('/status')
  @ApiOperation({ summary: 'Get all monitor status' })
  @ApiResponse({
    status: 200,
    description: 'All monitor status fetched successfully.',
  })
  public async getAllMonitorStatus() {
    return this.monitorService.getAllMonitorStatus();
  }

  @EventPattern('add_site')
  public async doCheck(site: { id: number; url: string }) {
    return this.monitorService.doCheck(site);
  }
}
