import { Module } from '@nestjs/common';
import { getModulesMember } from './modules/member.util';
import { ConfigModule } from '@nestjs/config';
import ormConfig from './modules/config/orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfig,
    }),
    ...getModulesMember(),
  ],
})
export class MemberApiModule {}
