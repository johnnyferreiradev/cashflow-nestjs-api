import { CompanyModel } from '../domain/company.model';
import { CompanyRepository } from '../domain/company.repository';

export class GetCompanyUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(id: string): Promise<CompanyModel> {
    return await this.companyRepository.findOne(id);
  }
}
