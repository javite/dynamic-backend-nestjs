
import { Column, CreateDateColumn,  DeleteDateColumn,  Entity, Index, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Warning {

    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    type: number;

    @Column()
    code: number;

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    active: boolean;

    @Column({nullable: true})
    batchId: number;
    
    @Column({nullable: true})
    acceptedBy: number;

    @Column({nullable: true})
    acceptedAt:Date;

    @DeleteDateColumn()
    deletedAt: Date;
    
    @Index()
    @CreateDateColumn()
    createdAt:Date;
}
