import { DynamicModule, Module } from '@nestjs/common';
import { LoggerModule } from 'src/infrastructure/logger/logger.module';
import { RepositoriesModule } from 'src/infrastructure/repositories/repositories.module';
import { ExceptionsModule } from 'src/infrastructure/exceptions/exceptions.module';
import { DatabaseCompanyRepository } from '../../core/company/infrastructure/company.repository';
import { UseCaseProxy } from './usecases-proxy';
import { GetCompanyUseCase } from 'src/core/company/usecases/get-company.usecase';
import { GetCompaniesUseCase } from 'src/core/company/usecases/get-companies.usecase';
import { CreateCompanyUseCase } from 'src/core/company/usecases/create-company.usecase';
import { UpdateCompanyUseCase } from 'src/core/company/usecases/update-company.usecase';
import { DeleteCompanyUseCase } from 'src/core/company/usecases/delete-company.usecase';
import { LoggerService } from '../logger/logger.service';

@Module({
  imports: [LoggerModule, RepositoriesModule, ExceptionsModule],
})
export class UsecasesProxyModule {
  static GET_COMPANY_USECASES_PROXY = 'getCompanyUsecasesProxy';
  static GET_COMPANIES_USECASES_PROXY = 'getCompaniesUsecasesProxy';
  static POST_COMPANY_USECASES_PROXY = 'postCompanyUsecasesProxy';
  static DELETE_COMPANY_USECASES_PROXY = 'deleteCompanyUsecasesProxy';
  static PUT_COMPANY_USECASES_PROXY = 'putCompanyUsecasesProxy';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [DatabaseCompanyRepository],
          provide: UsecasesProxyModule.GET_COMPANY_USECASES_PROXY,
          useFactory: (companyRepository: DatabaseCompanyRepository) =>
            new UseCaseProxy(new GetCompanyUseCase(companyRepository)),
        },
        {
          inject: [DatabaseCompanyRepository],
          provide: UsecasesProxyModule.GET_COMPANIES_USECASES_PROXY,
          useFactory: (companyRepository: DatabaseCompanyRepository) =>
            new UseCaseProxy(new GetCompaniesUseCase(companyRepository)),
        },
        {
          inject: [DatabaseCompanyRepository],
          provide: UsecasesProxyModule.POST_COMPANY_USECASES_PROXY,
          useFactory: (
            logger: LoggerService,
            companyRepository: DatabaseCompanyRepository,
          ) =>
            new UseCaseProxy(
              new CreateCompanyUseCase(logger, companyRepository),
            ),
        },
        {
          inject: [DatabaseCompanyRepository],
          provide: UsecasesProxyModule.PUT_COMPANY_USECASES_PROXY,
          useFactory: (logger, companyRepository: DatabaseCompanyRepository) =>
            new UseCaseProxy(
              new UpdateCompanyUseCase(logger, companyRepository),
            ),
        },
        {
          inject: [DatabaseCompanyRepository],
          provide: UsecasesProxyModule.DELETE_COMPANY_USECASES_PROXY,
          useFactory: (logger, companyRepository: DatabaseCompanyRepository) =>
            new UseCaseProxy(
              new DeleteCompanyUseCase(logger, companyRepository),
            ),
        },
      ],
      exports: [
        UsecasesProxyModule.GET_COMPANY_USECASES_PROXY,
        UsecasesProxyModule.GET_COMPANIES_USECASES_PROXY,
        UsecasesProxyModule.POST_COMPANY_USECASES_PROXY,
        UsecasesProxyModule.PUT_COMPANY_USECASES_PROXY,
        UsecasesProxyModule.DELETE_COMPANY_USECASES_PROXY,
      ],
    };
  }
}
