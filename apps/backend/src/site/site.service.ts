import { Inject, Injectable } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Site } from './entities/site.entity';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site)
    private siteRepository: Repository<Site>,
    @Inject('UPTIME_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  public async list(): Promise<Site[]> {
    const result = await this.siteRepository.find();
    return result;
  }

  public async add(createSiteDto: CreateSiteDto) {
    const site = this.siteRepository.create(createSiteDto);
    await this.siteRepository.save(site);
    this.client.emit('add_site', site);
    return site;
  }

  public async del(id: number) {
    await this.siteRepository.delete(id);
  }
}
