import { ExpressCassandraModule } from '@iaminfinity/express-cassandra';
import { HttpModule, Module } from '@nestjs/common';
import { FileUploadEntity } from './entity/file-upload.entity';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { ServeFileController } from './serve-file.controller';

@Module({
  imports: [ExpressCassandraModule.forFeature([FileUploadEntity]), HttpModule],
  controllers: [FilesController, ServeFileController],
  providers: [FilesService],
})
export class FilesModule {}
