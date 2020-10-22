import {
  Injectable,
  HttpException,
  HttpStatus
} from '@nestjs/common';

@Injectable()
export class TestService {
  hello () {
    return '/hello'
  }

  success () {
    return {
      list: [],
      pagintion: {
        pageSize: 10
      }
    }
  }

  error () {
    throw new HttpException('用户编号错误', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
