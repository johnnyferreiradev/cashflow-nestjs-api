import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class TimestempEntity {
  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;
}
