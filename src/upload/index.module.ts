import { Module } from '@nestjs/common';

import { UploadService } from './index.service';
import { UploadController } from './index.controller';

@Module({
  providers: [UploadService],
  controllers: [UploadController]
})
export class UploadModule {}
