import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Get,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { SiteService } from './site.service';
import { SiteType, SiteAddType, SiteListType } from '@root/types/site';
import { AuthGuard } from '@nestjs/passport';

@Controller('site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('list')
  @ApiOperation({ summary: 'List all sites' })
  public async list(): Promise<SiteListType> {
    return this.siteService.list();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({ summary: 'Add a new site' })
  public async add(@Body() data: SiteAddType): Promise<SiteType> {
    return this.siteService.add(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a site by ID' })
  public async del(@Param('id') id: string): Promise<void> {
    this.siteService.del(+id);
  }
}
