import { json } from "stream/consumers";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,  ManyToOne, Index } from "typeorm";
import { Batch } from "./batch.entity";
import { User } from "./user.entity";


@Entity()
export class AuditTrail {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    eventType: number;

    @Index()
    @Column()
    object: number;

    @Index()
    @Column()
    fieldName: string;

    @Column()
    newValue: string;

    @Column({nullable: true})
    previousValue: string;

    @Column({type: 'json', nullable: true})
    file: any;

    @ManyToOne(()=>User, user=>user.auditTrail)
    user: User;

    @ManyToOne(()=>Batch, batch=>batch.auditTrail, {nullable: true})
    batch: Batch;

    @Index()
    @CreateDateColumn()
    createdAt:Date;
}
/*
Audit trail

Modify values:
OT:
- name OT
- code OT
- description OT
- product selected

Batch:
- name
- date vencimiento
- date fabricacion
- expected size

Product:
- name
- presentation
- weight max
- weight min
- weight target
- speed
- GTIN
- internal code
- width
- state?

Configurations:
- 

----------------------------------
Acciones:
- create OT
- close OT
- delete OT
- open OT

- create Batch
- close Batch
- delete Batch
- open Batch

- create Product
- delete Product
-
*/