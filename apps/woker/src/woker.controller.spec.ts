import { Test, TestingModule } from '@nestjs/testing';
import { WokerController } from './woker.controller';
import { WokerService } from './woker.service';

describe('WokerController', () => {
  let wokerController: WokerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WokerController],
      providers: [WokerService],
    }).compile();

    wokerController = app.get<WokerController>(WokerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(wokerController.getHello()).toBe('Hello World!');
    });
  });
});
