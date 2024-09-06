import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RegisterType } from '@root/types/auth';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully register.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public async register(@Body() data: RegisterType) {
    return this.authService.register(data.email, data.password);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully login.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
