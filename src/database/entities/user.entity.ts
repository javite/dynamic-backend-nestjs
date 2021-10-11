import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    user: string;

    @Column()
    password: string;

    @Column({nullable: true})
    token: string;

    @Column()
    level: number;

    @Column()
    groupLevel: number;

    @Column({nullable: true})
    passExpirationDate: Date;

    @Column({nullable: true})
    active: boolean;

    @Column({nullable: true})
    erased: boolean;
    
    @DeleteDateColumn()
    deletedAt: Date;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}
