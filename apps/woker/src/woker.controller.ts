import { Controller, Get } from '@nestjs/common';
import { WokerService } from './woker.service';

@Controller()
export class WokerController {
  constructor(private readonly wokerService: WokerService) {}

  @Get()
  getHello(): string {
    return this.wokerService.getHello();
  }
}
