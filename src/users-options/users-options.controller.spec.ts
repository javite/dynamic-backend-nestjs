import { Test, TestingModule } from '@nestjs/testing';
import { UsersOptionsController } from './users-options.controller';
import { UsersOptionsService } from './users-options.service';

describe('UsersOptionsController', () => {
  let controller: UsersOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersOptionsController],
      providers: [UsersOptionsService],
    }).compile();

    controller = module.get<UsersOptionsController>(UsersOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
