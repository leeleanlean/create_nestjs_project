import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TestService } from './index.service'

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/hello')
  upload () {
    return this.testService.hello()
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/success')
  success () {
    return this.testService.success()
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/error')
  error () {
    return this.testService.error()
  }
}
