import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CompanyTypes } from '../enums/index.enums';
import { Address } from 'src/core/address/entities/address.entity';
import { TimestempEntity } from 'src/utils/entities';

@Entity('company')
export class Company extends TimestempEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'boolean', default: true })
  firstAccess: boolean;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'enum', enum: CompanyTypes, nullable: true })
  type: CompanyTypes;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cnpj: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cpf: string;

  @OneToOne(() => Address, (address) => address.id, { nullable: true })
  @JoinColumn()
  address: string;
}
