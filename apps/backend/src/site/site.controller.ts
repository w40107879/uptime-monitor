import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SiteService } from './site.service';
import { CreateSiteDto } from './dto/create-site.dto';

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
  public async list() {
    return this.siteService.list();
  }

  @Post()
  @ApiOperation({ summary: 'Add a new site' })
  @ApiResponse({
    status: 201,
    description: 'The site has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public async add(@Body() createSiteDto: CreateSiteDto) {
    return this.siteService.add(createSiteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a site by ID' })
  @ApiResponse({ status: 200, description: 'Site deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Site not found.' })
  public async del(@Param('id') id: string) {
    return this.siteService.del(+id);
  }
}
