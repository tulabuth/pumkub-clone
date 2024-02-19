import { Module } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { PlatformController } from './platforms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Platform } from '@app/common/entities/Platform';
import { Categories } from '@app/common/entities/Categories';

@Module({
  imports:[TypeOrmModule.forFeature([Platform,Categories])],
  controllers: [PlatformController],
  providers: [PlatformsService],
})
export class PlatformsModule {}
