import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO: disable CORS in production
  app.enableCors();
  await app.listen(4000);
}
bootstrap();
