import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser'; // use cookie
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());// use cookie
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
