import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from '../site/entities/site.entity';
import { Monitor } from './entities/monitor.entity';
import { Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';
import {
  DoCheckType,
  MonitorStatusType,
  PingResultType,
} from '@root/types/monitor';

@Injectable()
export class MonitorService {
  constructor(
    @InjectRepository(Monitor)
    private monitorRepository: Repository<Monitor>,
    @InjectRepository(Site)
    private siteRepository: Repository<Site>,
  ) {}

  // @Cron('* * * * *')
  public async checkAll() {
    console.log('cron');
    const sites = await this.siteRepository.find();
    await Promise.all(sites.map((site) => this.doCheck(site)));
  }

  public async getAllMonitorStatus(): Promise<MonitorStatusType[]> {
    const rows = await this.monitorRepository
      .createQueryBuilder('monitor')
      .select(['monitor.site_id', 'monitor.up', 'monitor.created_at'])
      .distinctOn(['monitor.site_id'])
      .orderBy('monitor.site_id')
      .addOrderBy('monitor.created_at', 'DESC')
      .getMany();
    return rows.map((row) => ({
      id: row.site_id,
      up: row.up,
      createdAt: row.created_at,
    }));
  }

  public async doCheck(site: DoCheckType) {
    const { id, url } = site;
    const { up } = await this.ping({ url });
    const previous = await this.getPreviousMeasurements(id);

    if (up !== previous) {
      // emit event to slack
    }
    await this.createMeasurement(id, up);
    return { up };
  }

  private async ping({ url }): Promise<PingResultType> {
    // If the url does not start with "http:" or "https:", default to "https:".
    if (!url.startsWith('http:') && !url.startsWith('https:')) {
      url = 'https://' + url;
    }

    try {
      // Make an HTTP request to check if it's up.
      const resp = await fetch(url, { method: 'GET' });
      // 2xx and 3xx status codes are considered up
      const up = resp.status >= 200 && resp.status < 300;
      return { up };
    } catch (err) {
      return { up: false };
    }
  }

  private async getPreviousMeasurements(siteId: number): Promise<boolean> {
    const row = await this.monitorRepository
      .createQueryBuilder('monitor')
      .select('monitor.up')
      .where('monitor.site_id = :siteId', { siteId })
      .orderBy('monitor.created_at', 'DESC')
      .getOne();
    return row?.up ?? false;
  }

  private async createMeasurement(
    siteId: number,
    up: boolean,
  ): Promise<Monitor> {
    const monitor = this.monitorRepository.create({ site_id: siteId, up });
    return this.monitorRepository.save(monitor);
  }
}
