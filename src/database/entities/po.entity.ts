import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { Product } from "./product.entity";

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

    @Column({nullable: true})
    batchId: number;

    @ManyToOne(()=>User, user=>user.pos)
    user: User;

    @ManyToOne(()=>Product, product=>product.pos)
    product: Product;

    @Column()
    state: number;

    @DeleteDateColumn()
    deletedAt: Date;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

}
