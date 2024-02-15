import { Test, TestingModule } from '@nestjs/testing';
import { MemberApiController } from './member-api.controller';
import { MemberApiService } from './member-api.service';

describe('MemberApiController', () => {
  let memberApiController: MemberApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MemberApiController],
      providers: [MemberApiService],
    }).compile();

    memberApiController = app.get<MemberApiController>(MemberApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(memberApiController.getHello()).toBe('Hello World!');
    });
  });
});
