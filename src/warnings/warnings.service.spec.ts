import { Test, TestingModule } from '@nestjs/testing';
import { WarningsService } from './warnings.service';

describe('WarningsService', () => {
  let service: WarningsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarningsService],
    }).compile();

    service = module.get<WarningsService>(WarningsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
