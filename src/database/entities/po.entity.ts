import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Product } from "./product.entity";
import { Batch } from "./batch.entity";

@Entity()
export class PO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    code: string;

    @Column({nullable: true})
    description: string;

    @OneToMany(()=>Batch, batch=>batch.po)
    batches: Batch[];

    @ManyToOne(()=>User, user=>user.pos)
    user: User;

    @ManyToMany(()=>Product)
    @JoinTable()
    products: Product[];

    @Column()
    state: number;

    @DeleteDateColumn()
    deletedAt: Date;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

}
