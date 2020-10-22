import { Module } from '@nestjs/common';

import { TestService } from './index.service';
import { TestController } from './index.controller';

@Module({
  providers: [TestService],
  controllers: [TestController]
})
export class TestModule {}
