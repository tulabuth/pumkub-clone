import { Module } from '@nestjs/common';
import { RegistersService } from './registers.service';
import { RegistersController } from './registers.controller';
import { UsersService } from '../users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '@app/common/entities/Users';
import { Languages } from '@app/common/entities/Language';

@Module({
  imports:[TypeOrmModule.forFeature([Users,Languages])],
  controllers: [RegistersController],
  providers: [RegistersService,UsersService],
})
export class RegistersModule {}
