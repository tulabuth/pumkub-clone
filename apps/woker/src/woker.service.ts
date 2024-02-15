import { Injectable } from '@nestjs/common';

@Injectable()
export class WokerService {
  getHello(): string {
    return 'Hello World!';
  }
}
