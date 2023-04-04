/*
 * Copyright (c) 2022 by Brac-UPG Programme
 * All Rights Reserved by BRAC
 * Powered By BMQA
 * BMQA-BRAC Confidential
 */

import { types, uuid } from '@iaminfinity/express-cassandra';
import {
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiGuard } from '@upg/auth';
import {
  SwaggerResponseType,
  TransformInterceptor,
  UPGRequestLogInterceptor,
} from '@upg/common';
import * as multer from 'multer';
import * as path from 'path';
import { FileResponseDTO } from './dto/file-response.dto';
import { FilesService } from './files.service';

@ApiGuard()
@ApiTags('File Upload APIs')
@Controller('files')
@UseInterceptors(TransformInterceptor, UPGRequestLogInterceptor)
export class FilesController {
  constructor(private filesService: FilesService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: () => SwaggerResponseType(FileResponseDTO, true),
  })
  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      dest: 'uploads',
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          return cb(null, 'uploads');
        },
        filename: (req, file, cb) => {
          cb(null, uuid() + path.extname(file.originalname));
        },
      }),
    }),
  )
  public uploadFile(
    @UploadedFiles() files,
    @Headers('host') host: string,
  ): any {
    const baseUrl = `https://${host}/upg-files/api/v1/file-serve`;
    return this.filesService.saveFile(files, baseUrl);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: () => SwaggerResponseType(FileResponseDTO, true),
  })
  @Get('/resources/:resourceId')
  getByResourceId(@Param('resourceId') resourceId: types.Uuid): any {
    return this.filesService.getFilesByResourceId(resourceId);
  }

  @ApiOkResponse({ type: () => SwaggerResponseType(Boolean, false) })
  @Delete('/resources/:resourceId/:fileId/remove')
  removeResourceById(@Param('fileId') fileId: string): any {
    return this.filesService.removeResourceById(fileId);
  }
}
