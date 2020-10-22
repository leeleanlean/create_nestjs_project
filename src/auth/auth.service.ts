import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/index.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.find({
      username,
      password
    });
    if (user?.length) {
      return user;
    } else {
      throw new HttpException('用户名或密码不对', HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  async login(user: any): Promise<any> {
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
