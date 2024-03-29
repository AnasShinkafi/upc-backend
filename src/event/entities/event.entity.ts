import { Admin } from 'src/register-admin/entities/register-admin.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: false })
  eventTitle: string;

  @Column({ nullable: false })
  image: string;

  @Column({ nullable: false })
  eventDescription: string;

  @Column({ nullable: false })
  eventDate: string;

  @Column({ nullable: false })
  eventTime: string;

  @Column({ nullable: false })
  location: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => Admin, (admin) => admin.id)
  userId: Admin;
}
