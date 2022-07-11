import { Test, TestingModule } from '@nestjs/testing';
import { UsersOptionsService } from './users-options.service';

describe('UsersOptionsService', () => {
  let service: UsersOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersOptionsService],
    }).compile();

    service = module.get<UsersOptionsService>(UsersOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
