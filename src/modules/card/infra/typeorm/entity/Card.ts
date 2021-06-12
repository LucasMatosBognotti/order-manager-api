import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Administrator from '../../../../administrator/infra/typeorm/entity/Administrator';

@Entity('cards')
class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  fee: number;

  @Column()
  admin_id: string;

  @ManyToOne(() => Administrator)
  @JoinColumn({ name: 'admin_id' })
  administrator: Administrator;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Card;
