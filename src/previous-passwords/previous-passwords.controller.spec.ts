import { Test, TestingModule } from '@nestjs/testing';
import { PreviousPasswordsController } from './previous-passwords.controller';
import { PreviousPasswordsService } from './previous-passwords.service';

describe('PreviousPasswordsController', () => {
  let controller: PreviousPasswordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreviousPasswordsController],
      providers: [PreviousPasswordsService],
    }).compile();

    controller = module.get<PreviousPasswordsController>(PreviousPasswordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
