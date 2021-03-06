import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany, Index } from "typeorm";
import * as bcrypt from 'bcrypt';
import { PO } from "./po.entity";
import { AuditTrail } from "./audit-trail.entity";
import { PreviousPassword } from "./previous-password.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Index({ unique: true })
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

    @OneToMany(()=>PO, po => po.user)
    pos: PO[];

    @OneToMany(()=>AuditTrail, auditTrail => auditTrail.user)
    auditTrail: AuditTrail[];

    @OneToMany(()=>PreviousPassword, previousPassword => previousPassword.user)
    previousPassword: PreviousPassword[];
    
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
