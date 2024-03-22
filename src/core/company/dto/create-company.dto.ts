import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { CompanyTypes } from '../enums/index.enums';

export class CreateCompanyDto {
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @MaxLength(20)
  phoneNumber: string;

  @MaxLength(255)
  email: string;

  @IsOptional()
  @IsEnum(CompanyTypes)
  type: CompanyTypes;

  @MaxLength(255)
  cnpj: string;

  @MaxLength(255)
  cpf: string;

  @IsUUID()
  address: string;
}
