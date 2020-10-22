import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
  username: string;

  @Column({ length: 128 })
  password: string;

  @Column({ type: 'timestamp', default: () => 'current_timestamp' })
  createAt: Timestamp;

  @Column({
    type: 'timestamp',
    onUpdate: 'current_timestamp',
    default: () => 'current_timestamp',
  })
  updateAt: Timestamp;
}
