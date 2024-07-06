import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyModel } from '../domain/company.model';
import { CompanyRepository } from '../domain/company.repository';
import { Company } from './company.entity';
import { Repository } from 'typeorm';
import { CompanyTypes } from '../enums/index.enums';
import { UpdateCompanyDto } from '../domain/company.dtos';

@Injectable()
export class DatabaseCompanyRepository implements CompanyRepository {
  constructor(
    @InjectRepository(Company)
    private readonly companyEntityRepository: Repository<Company>,
  ) {}

  async create(company: CompanyModel): Promise<CompanyModel> {
    const companyEntity = this.toCompanyEntity(company);
    const result = await this.companyEntityRepository.create(companyEntity);
    return this.toCompany(result);
  }

  async findAll(): Promise<CompanyModel[]> {
    const companiesEntity = await this.companyEntityRepository.find();
    return companiesEntity.map((companyEntity) =>
      this.toCompany(companyEntity),
    );
  }

  async findOne(id: string): Promise<CompanyModel> {
    const companyEntity = await this.companyEntityRepository.findOneOrFail({
      where: { id },
    });
    return this.toCompany(companyEntity);
  }

  async update(company: UpdateCompanyDto): Promise<void> {
    await this.companyEntityRepository.update(
      {
        id: company.id,
      },
      {
        name: company.name,
        phoneNumber: company.phoneNumber,
        email: company.email,
        companyType: CompanyTypes[company.companyType],
        cnpj: company.cnpj,
        cpf: company.cpf,
        address: company.address,
      },
    );
  }

  async remove(id: string): Promise<void> {
    await this.companyEntityRepository.delete({ id });
  }

  private toCompany(companyEntity: Company): CompanyModel {
    const company: CompanyModel = new CompanyModel();
    company.id = companyEntity.id;
    company.name = companyEntity.name;
    company.address = companyEntity.address;
    company.cnpj = companyEntity.cnpj;
    company.companyType = CompanyTypes[companyEntity.companyType];
    company.email = companyEntity.email;
    company.firstAccess = companyEntity.firstAccess;
    company.phoneNumber = companyEntity.phoneNumber;
    company.createdAt = companyEntity.createdAt;
    company.updatedAt = companyEntity.updatedAt;
    return company;
  }

  private toCompanyEntity(company: CompanyModel): Company {
    const companyEntity: Company = new Company();
    companyEntity.id = company.id;
    companyEntity.name = company.name;
    companyEntity.address = company.address;
    companyEntity.cnpj = company.cnpj;
    companyEntity.companyType = CompanyTypes[companyEntity.companyType];
    companyEntity.email = company.email;
    companyEntity.firstAccess = company.firstAccess;
    companyEntity.phoneNumber = company.phoneNumber;
    return companyEntity;
  }
}
