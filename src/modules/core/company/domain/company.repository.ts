import { UpdateCompanyDto } from './company.dtos';
import { CompanyModel } from './company.model';

export interface CompanyRepository {
  create(company: CompanyModel): Promise<CompanyModel>;
  findAll(): Promise<CompanyModel[]>;
  findOne(id: string): Promise<CompanyModel>;
  update(company: UpdateCompanyDto): Promise<void>;
  remove(id: string): Promise<void>;
}
