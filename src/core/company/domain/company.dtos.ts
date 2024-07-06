import { CompanyTypes } from '../enums/index.enums';

export class CreateCompanyDto {
  name: string;
  phoneNumber: string;
  email: string;
  companyType: CompanyTypes;
  cnpj: string;
  cpf: string;
  address: string;
}

export class UpdateCompanyDto extends CreateCompanyDto {
  readonly id: string;
}
