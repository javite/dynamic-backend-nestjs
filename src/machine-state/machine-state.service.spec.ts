import { Test, TestingModule } from '@nestjs/testing';
import { MachineStateService } from './machine-state.service';

describe('MachineStateService', () => {
  let service: MachineStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachineStateService],
    }).compile();

    service = module.get<MachineStateService>(MachineStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
