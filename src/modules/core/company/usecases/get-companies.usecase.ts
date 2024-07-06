import { CompanyModel } from '../domain/company.model';
import { CompanyRepository } from '../domain/company.repository';

export class GetCompaniesUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(): Promise<CompanyModel[]> {
    return await this.companyRepository.findAll();
  }
}
