import { ApiProperty } from '@nestjs/swagger';

export class CreateSiteDto {
  @ApiProperty()
  url: string;
}
