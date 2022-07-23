import { IsNotEmpty } from "class-validator";

export class AuditTrailFilterOptions {
    selected: string;
    value?: string;
    options: { 
        value: string, 
        viewValue: string
    }[]
}