import { Module } from '@nestjs/common';
import { WokerController } from './woker.controller';
import { WokerService } from './woker.service';

@Module({
  imports: [],
  controllers: [WokerController],
  providers: [WokerService],
})
export class WokerModule {}
