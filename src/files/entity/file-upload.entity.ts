/*
 * Copyright (c) 2022 by Brac-UPG Programme
 * All Rights Reserved by BRAC
 * Powered By BMQA
 * BMQA-BRAC Confidential
 */

import { Column, Entity } from '@iaminfinity/express-cassandra';

@Entity({
  table_name: 'file_resources',
  key: ['file_id'],
  materialized_views: {
    files_by_resource: {
      key: ['resource_id', 'file_id'],
      select: ['*' as any],
    },
  },
})
export class FileUploadEntity {
  @Column({
    type: 'text',
  })
  file_id: string;

  @Column({ type: 'uuid' })
  resource_id: any;

  @Column({
    type: 'text',
  })
  resource_type: string;

  @Column({
    type: 'text',
  })
  filename: string;

  @Column({
    type: 'text',
  })
  originalname: string;

  @Column({
    type: 'text',
  })
  mimetype: string;

  @Column({
    type: 'text',
  })
  encoding: string;

  @Column({
    type: 'double',
  })
  size: number;

  @Column({
    type: 'text',
  })
  url: string;

  @Column({
    type: 'text',
  })
  created_by: string;

  @Column({
    type: 'timestamp',
  })
  created_at: Date;

  @Column({
    type: 'text',
  })
  updated_by: string;

  @Column({
    type: 'timestamp',
  })
  updated_at: Date;
}
