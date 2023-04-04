import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('/api/v1');

  const config = app.get(ConfigService);

  const swaggerOptions = new DocumentBuilder()
    .setTitle('File Uploader API')
    .setDescription('File Uploader  API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('docs', app, document);
  const port = config.get('PORT', 3002);

  await app.listen(port);
  logger.log(`Application is running on : ${await app.getUrl()}`);
}
bootstrap();
