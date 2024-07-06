import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
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
  companyType: CompanyTypes;

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

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}
