import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './index.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll () {
    return this.userService.findAll()
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create (@Body() params: any) {
    return this.userService.create(params)
  }
}
