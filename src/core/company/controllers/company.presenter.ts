import { ApiProperty } from '@nestjs/swagger';
import { CompanyTypes } from '../enums/index.enums';
import { CompanyModel } from '../domain/company.model';

export class CompanyPresenter {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  firstAccess: boolean;
  @ApiProperty()
  phoneNumber: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  companyType: keyof typeof CompanyTypes;
  @ApiProperty()
  cnpj: string;
  @ApiProperty()
  cpf: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

  constructor(company: CompanyModel) {
    this.id = company.id;
    this.name = company.name;
    this.firstAccess = company.firstAccess;
    this.phoneNumber = company.phoneNumber;
    this.email = company.email;
    this.companyType = company.companyType;
    this.cnpj = company.cnpj;
    this.cpf = company.cpf;
    this.address = company.address;
    this.createdAt = company.createdAt;
    this.updatedAt = company.updatedAt;
  }
}
