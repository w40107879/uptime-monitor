import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Monitor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  site_id: number;

  @Column()
  up: boolean;

  @CreateDateColumn()
  created_at: Date;
}
