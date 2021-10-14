import { Test, TestingModule } from '@nestjs/testing';
import { PosController } from './pos.controller';
import { PosService } from './pos.service';

describe('PosController', () => {
  let controller: PosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PosController],
      providers: [PosService],
    }).compile();

    controller = module.get<PosController>(PosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
