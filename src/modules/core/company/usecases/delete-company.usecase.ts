import { ILogger } from 'src/domain/logger/logger.interface';
import { CompanyRepository } from '../domain/company.repository';

export class DeleteCompanyUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly companyRepository: CompanyRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.companyRepository.remove(id);
    this.logger.log(
      'deleteCompanyUseCases execute',
      `Company ${id} have been deleted`,
    );
  }
}
