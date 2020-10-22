import {
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { createWriteStream } from 'fs';
import { join } from 'path';

@Injectable()
export class UploadService {
  // save one file
  async save(file: { originalname: any; buffer: any; }) {
    const filePath = `${Date.now()}-${file.originalname}`
    const cws = createWriteStream(join(__dirname, '../../public/upload/', filePath))
    cws.write(file.buffer);
    return { filePath };
  }

  // save multiple file
  async saves (files: string | any[]) {
    if (files.length <=1) {
      throw new HttpException('请求参数错误.', HttpStatus.FORBIDDEN)
    }
    const filePaths = []
    for (const file of files) {
      const filePath = `${Date.now()}-${file.originalname}`
      filePaths.push({ filePath })
      const cws = createWriteStream(join(__dirname, '../../public/upload/', filePath))
      cws.write(file.buffer);
    }
    return { filePaths };
  }
}
