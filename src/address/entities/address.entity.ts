import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Address {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column()
    address_1: string;

    @Column()
    address_2: string;

    @Column({unique: true})
    email_1: string;

    @Column()
    email_2: string;

    @Column()
    phone_number: string;

    @Column()
    telephone: string;
}