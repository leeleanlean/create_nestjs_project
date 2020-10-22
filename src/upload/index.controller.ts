import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './index.service'

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  // 单文件上传
  @UseGuards(AuthGuard('jwt'))
  @Post('/file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile (@UploadedFile() file: any) {
    return this.uploadService.save(file)
  }

  // 多文件上传
  @UseGuards(AuthGuard('jwt'))
  @Post('/files')
  @UseInterceptors(FilesInterceptor('file'))
  uploadFiles (@UploadedFiles() files: any) {
    return this.uploadService.saves(files)
  }
}
