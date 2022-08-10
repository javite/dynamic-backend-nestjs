import { Test, TestingModule } from '@nestjs/testing';
import { PreviousPasswordsService } from './previous-passwords.service';

describe('PreviousPasswordsService', () => {
  let service: PreviousPasswordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreviousPasswordsService],
    }).compile();

    service = module.get<PreviousPasswordsService>(PreviousPasswordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
