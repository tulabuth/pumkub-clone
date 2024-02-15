import { NestFactory } from '@nestjs/core';
import { WokerModule } from './woker.module';

async function bootstrap() {
  const app = await NestFactory.create(WokerModule);
  await app.listen(3000);
}
bootstrap();
