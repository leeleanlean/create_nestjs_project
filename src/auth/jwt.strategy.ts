import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import CONFIG from '../config'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      ignoreExpiration: false,
      secretOrKey: CONFIG.AUTH_SECRET,
    });
  }

  async validate(payload: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = payload
    return result;
  }
}
