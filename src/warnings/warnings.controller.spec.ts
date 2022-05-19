import { Test, TestingModule } from '@nestjs/testing';
import { WarningsController } from './warnings.controller';
import { WarningsService } from './warnings.service';

describe('WarningsController', () => {
  let controller: WarningsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarningsController],
      providers: [WarningsService],
    }).compile();

    controller = module.get<WarningsController>(WarningsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
