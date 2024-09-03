import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SiteService } from './site.service';
import { SiteType, SiteAddType, SiteListType } from '@root/types/site';

@Controller('site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Get('list')
  @ApiOperation({ summary: 'List all sites' })
  @ApiResponse({
    status: 201,
    description: 'All sites will appear in the list.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public async list(): Promise<SiteListType> {
    return this.siteService.list();
  }

  @Post()
  @ApiOperation({ summary: 'Add a new site' })
  @ApiResponse({
    status: 201,
    description: 'The site has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public async add(@Body() data: SiteAddType): Promise<SiteType> {
    return this.siteService.add(data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a site by ID' })
  @ApiResponse({ status: 200, description: 'Site deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Site not found.' })
  public async del(@Param('id') id: string): Promise<void> {
    this.siteService.del(+id);
  }
}
