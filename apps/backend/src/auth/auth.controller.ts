import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SignInType } from '@root/types/auth';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Sign in' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully signed in.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public async signIn(@Body() data: SignInType) {
    return this.authService.signIn(data.name, data.pwd);
  }
}
