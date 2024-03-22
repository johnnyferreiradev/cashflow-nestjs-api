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

  @IsOptional()
  @MaxLength(20)
  phoneNumber: string;

  @IsOptional()
  @MaxLength(255)
  email: string;

  @IsOptional()
  @IsEnum(CompanyTypes)
  type: CompanyTypes;

  @IsOptional()
  @MaxLength(255)
  cnpj: string;

  @IsOptional()
  @MaxLength(255)
  cpf: string;

  @IsOptional()
  @IsUUID()
  address: string;
}
