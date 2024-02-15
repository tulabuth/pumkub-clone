import { Module } from '@nestjs/common';
import { MemberApiController } from './member-api.controller';
import { MemberApiService } from './member-api.service';

@Module({
  imports: [],
  controllers: [MemberApiController],
  providers: [MemberApiService],
})
export class MemberApiModule {}
