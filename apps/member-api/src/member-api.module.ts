import { Module } from '@nestjs/common';
import { getModulesMember } from './modules/member.util';

@Module({
  imports: [
    ...getModulesMember(),
  ],
})
export class MemberApiModule {}
