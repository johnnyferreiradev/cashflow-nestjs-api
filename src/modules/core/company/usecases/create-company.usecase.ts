import { ILogger } from 'src/domain/logger/logger.interface';
import { CompanyModel } from '../domain/company.model';
import { CompanyRepository } from '../domain/company.repository';
import { CreateCompanyDto } from '../domain/company.dtos';
import { CompanyTypes } from '../domain/company.enums';

export class CreateCompanyUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly companyRepository: CompanyRepository,
  ) {}

  async execute(createCompanyDto: CreateCompanyDto): Promise<CompanyModel> {
    const company = new CompanyModel();
    company.address = createCompanyDto.address;
    company.cnpj = createCompanyDto.cnpj;
    company.companyType = CompanyTypes[createCompanyDto.companyType];
    company.cpf = createCompanyDto.cpf;
    company.email = createCompanyDto.email;
    company.name = createCompanyDto.name;
    company.phoneNumber = createCompanyDto.phoneNumber;
    company.firstAccess = true;

    const result = await this.companyRepository.create(company);
    this.logger.log(
      'createCompanyUseCase execute',
      'New company have been created',
    );
    return result;
  }
}
