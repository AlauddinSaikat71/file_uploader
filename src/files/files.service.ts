/*
 * Copyright (c) 2022 by Brac-UPG Programme
 * All Rights Reserved by BRAC
 * Powered By BMQA
 * BMQA-BRAC Confidential
 */

import {
  InjectRepository,
  isUuid,
  Repository,
  types,
  uuid,
} from '@iaminfinity/express-cassandra';
import { Injectable } from '@nestjs/common';
import { existsSync, unlinkSync } from 'fs';
import * as path from 'path';
import { mergeMap, Observable } from 'rxjs';
import { FileUploadEntity } from './entity/file-upload.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileUploadEntity)
    private readonly fileUploadRepository: Repository<FileUploadEntity>,
  ) {}

  async saveFile(files: Record<string, any>, baseUrl: string) {
    const fileList = [];
    files.forEach(async (file) => {
      const fileResource = new FileUploadEntity();
      fileResource.file_id = path.basename(
        file.filename,
        path.extname(file.filename),
      );
      fileResource.filename = file.filename;
      fileResource.encoding = file.encoding;
      fileResource.mimetype = file.mimetype;
      fileResource.originalname = file.originalname;
      fileResource.size = file.size;
      fileResource.resource_id = uuid();
      fileResource.resource_type = path
        .extname(file.filename)
        .replace(/\./g, '');
      fileResource.created_at = Date.now() as any;
      fileResource.url = `${baseUrl}/${file.filename}`;

      await this.fileUploadRepository.save(fileResource);
      fileList.push(fileResource);
    });

    return fileList;
  }

  public getFilesByResourceId(
    resourceId: string | types.Uuid,
  ): Observable<FileUploadEntity[]> {
    resourceId = isUuid(resourceId) ? resourceId : uuid(resourceId);
    return this.fileUploadRepository.find(
      { resource_id: resourceId },
      { materialized_view: 'files_by_resource' },
    );
  }

  public removeResourceById(fileId: string): Observable<boolean> {
    return this.fileUploadRepository.findOne({ file_id: fileId }).pipe(
      mergeMap(async (fileResource) => {
        if (!fileResource) {
          return true;
        }

        if (existsSync(`uploads/${fileResource.file_id}`)) {
          unlinkSync(`uploads/${fileResource.file_id}`);
        }

        await this.fileUploadRepository.remove(fileResource).toPromise();
        return true;
      }),
    );
  }
}
