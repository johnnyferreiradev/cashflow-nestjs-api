import { CompanyTypes } from './company.enums';

export class CompanyModel {
  id: string;
  name: string;
  firstAccess: boolean;
  phoneNumber: string;
  email: string;
  companyType: keyof typeof CompanyTypes;
  cnpj: string;
  cpf: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}
