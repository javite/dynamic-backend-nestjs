import { Test, TestingModule } from '@nestjs/testing';
import { AuditTrailService } from './audit-trail.service';

describe('AuditTrailService', () => {
  let service: AuditTrailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditTrailService],
    }).compile();

    service = module.get<AuditTrailService>(AuditTrailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
