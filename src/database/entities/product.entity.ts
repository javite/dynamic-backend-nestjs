import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Batch } from "./batch.entity";
import { PO } from "./po.entity";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    presentation: string;

    @Column({nullable: true})
    GTIN: string;

    @Column({nullable: true})
    internalCode: string;

    @Column("decimal", { precision: 6, scale: 2 })
    weightTarget: number;

    @Column("decimal", { precision: 6, scale: 2 })
    weightMax: number;

    @Column("decimal", { precision: 6, scale: 2 })
    weightMin: number;

    @Column({nullable: true})
    speed: number;

    @Column()
    state: number;

    // @OneToMany(()=>PO, po => po.product)
    // pos: PO[];

    @OneToMany(()=>Batch, batch => batch.product)
    batches: Batch[];

    @DeleteDateColumn()
    deletedAt: Date;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

}
