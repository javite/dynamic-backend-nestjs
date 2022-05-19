import { Test, TestingModule } from '@nestjs/testing';
import { MachineStateController } from './machine-state.controller';
import { MachineStateService } from './machine-state.service';

describe('MachineStateController', () => {
  let controller: MachineStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MachineStateController],
      providers: [MachineStateService],
    }).compile();

    controller = module.get<MachineStateController>(MachineStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
