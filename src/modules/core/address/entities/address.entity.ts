import { TimestempEntity } from 'src/infrastructure/utils/entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address extends TimestempEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  country: string;

  @Column({ type: 'varchar', length: 255 })
  state: string;

  @Column({ type: 'varchar', length: 255 })
  city: string;

  @Column({ type: 'varchar', length: 255 })
  neighborhood: string;

  @Column({ type: 'varchar', length: 255 })
  street: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  number: string;
}
