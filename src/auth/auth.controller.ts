import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Login
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Body() req: any) {
    return this.authService.login(req);
  }

  // Check header token params
  @UseGuards(AuthGuard('jwt'))
  @Get('/info')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
