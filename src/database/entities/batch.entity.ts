import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { AuditTrail } from "./audit-trail.entity";
import { PO } from "./po.entity";
import { Product } from "./product.entity";
import { Unit } from "./unit.entity";

@Entity()
export class Batch {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    expirationDate: Date;

    @Column({nullable: true})
    productionDate: Date;

    @Column({nullable: true})
    expectedSize: number;

    @Column({nullable: true})
    finishedBatchDate: Date;

    @Column()
    state: number;

    @Column({nullable: true})
    okTotal: number;

    @Column({nullable: true})
    nokTotal: number;

    @Column({nullable: true})
    nokHigh: number;

    @Column({nullable: true})
    nokLow: number;

    @Column({nullable: true})
    nokOther: number;

    @ManyToOne(()=>Product, product=>product.batches)
    product: Product;

    @ManyToOne(()=>PO, po=>po.batches)
    po: PO;

    @OneToMany(()=>Unit, unit=>unit.batch)
    units: Unit[];

    @OneToMany(()=>AuditTrail, auditTrail=>auditTrail.batch)
    auditTrail: AuditTrail[];

    @DeleteDateColumn()
    deletedAt: Date;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

}
