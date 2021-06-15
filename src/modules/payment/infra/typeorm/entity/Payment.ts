import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Card from '../../../../card/infra/typeorm/entity/Card';
import Order from '../../../../order/infra/typeorm/entity/Order';
import PaymentMethod from '../../../../payment_method/infra/typeorm/entity/PaymentMethod';

@Entity('payments')
class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: number;

  @Column()
  order_id: string;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column()
  card_id: string;

  @ManyToOne(() => Card)
  @JoinColumn({ name: 'card_id' })
  card: Card;

  @Column()
  payment_method_id: string;

  @ManyToOne(() => PaymentMethod)
  @JoinColumn({ name: 'payment_method_id' })
  payment_method: PaymentMethod;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Payment;
