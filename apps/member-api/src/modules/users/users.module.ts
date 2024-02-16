import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '@app/common/entities/Users';
import { Languages } from '@app/common/entities/Language';

@Module({
  imports:[TypeOrmModule.forFeature([Users,Languages])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
