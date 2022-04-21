import { PartialType } from '@nestjs/mapped-types';
import { CreateAuditTrailDto } from './create-audit-trail.dto';

export class UpdateAuditTrailDto extends PartialType(CreateAuditTrailDto) {}
