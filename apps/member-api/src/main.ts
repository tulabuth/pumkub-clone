import { NestFactory } from '@nestjs/core';
import { MemberApiModule } from './member-api.module';

async function bootstrap() {
  const app = await NestFactory.create(MemberApiModule);
  await app.listen(3000);
}
bootstrap();
