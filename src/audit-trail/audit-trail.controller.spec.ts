import { Test, TestingModule } from '@nestjs/testing';
import { AuditTrailController } from './audit-trail.controller';
import { AuditTrailService } from './audit-trail.service';

describe('AuditTrailController', () => {
  let controller: AuditTrailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuditTrailController],
      providers: [AuditTrailService],
    }).compile();

    controller = module.get<AuditTrailController>(AuditTrailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
