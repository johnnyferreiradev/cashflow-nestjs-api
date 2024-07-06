import { ILogger } from 'src/domain/logger/logger.interface';
import { CompanyRepository } from '../domain/company.repository';
import { UpdateCompanyDto } from '../domain/company.dtos';

export class UpdateCompanyUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly companyRepository: CompanyRepository,
  ) {}

  async execute(updateCompanyDto: UpdateCompanyDto): Promise<void> {
    await this.companyRepository.update(updateCompanyDto);
    this.logger.log(
      'updateCompanyUseCase execute',
      `Company ${updateCompanyDto.id} have been updated`,
    );
  }
}
