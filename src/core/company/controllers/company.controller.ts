import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UseCaseProxy } from 'src/infrastructure/usecases-proxy/usecases-proxy';
import { UsecasesProxyModule } from 'src/infrastructure/usecases-proxy/usecases-proxy.module';
import { GetCompanyUseCase } from '../usecases/get-company.usecase';
import { GetCompaniesUseCase } from '../usecases/get-companies.usecase';
import { CreateCompanyUseCase } from '../usecases/create-company.usecase';
import { UpdateCompanyUseCase } from '../usecases/update-company.usecase';
import { DeleteCompanyUseCase } from '../usecases/delete-company.usecase';
import { CompanyPresenter } from './company.presenter';
import { ApiResponseType } from 'src/infrastructure/common/swagger/response.decorator';
import { CreateCompanyDto, UpdateCompanyDto } from './company.dto';
import { CompanyTypes } from '../domain/company.enums';

@Controller('company')
@ApiTags('company')
@ApiResponse({ status: 500, description: 'Internal Error' })
@ApiExtraModels(CompanyPresenter)
export class CompanyController {
  constructor(
    @Inject(UsecasesProxyModule.GET_COMPANY_USECASES_PROXY)
    private readonly getCompanyUseCaseProxy: UseCaseProxy<GetCompanyUseCase>,
    @Inject(UsecasesProxyModule.GET_COMPANIES_USECASES_PROXY)
    private readonly getCompaniesUseCaseProxy: UseCaseProxy<GetCompaniesUseCase>,
    @Inject(UsecasesProxyModule.POST_COMPANY_USECASES_PROXY)
    private readonly createCompanyUseCaseProxy: UseCaseProxy<CreateCompanyUseCase>,
    @Inject(UsecasesProxyModule.PUT_COMPANY_USECASES_PROXY)
    private readonly updateCompanyUseCaseProxy: UseCaseProxy<UpdateCompanyUseCase>,
    @Inject(UsecasesProxyModule.DELETE_COMPANY_USECASES_PROXY)
    private readonly deleteCompanyUseCaseProxy: UseCaseProxy<DeleteCompanyUseCase>,
  ) {}

  @Get(':id')
  @ApiResponseType(CompanyPresenter, false)
  async getCompany(@Param('id') id: string) {
    const company = await this.getCompanyUseCaseProxy.getInstance().execute(id);
    return new CompanyPresenter(company);
  }

  @Get('companies')
  @ApiResponseType(CompanyPresenter, true)
  async getCompanies() {
    const companies = await this.getCompaniesUseCaseProxy
      .getInstance()
      .execute();
    return companies.map((company) => new CompanyPresenter(company));
  }

  @Put()
  @ApiResponseType(CompanyPresenter, true)
  async updateCompany(@Body() updateCompanyDto: UpdateCompanyDto) {
    const { address, cnpj, cpf, email, name, phoneNumber, companyType, id } =
      updateCompanyDto;
    await this.updateCompanyUseCaseProxy.getInstance().execute({
      address,
      cnpj,
      companyType: CompanyTypes[companyType],
      cpf,
      email,
      id,
      name,
      phoneNumber,
    });
    return 'success';
  }

  @Delete(':id')
  @ApiResponseType(CompanyPresenter, true)
  async deleteCompany(@Param('id') id: string) {
    await this.deleteCompanyUseCaseProxy.getInstance().execute(id);
    return 'success';
  }

  @Post()
  @ApiResponseType(CompanyPresenter, true)
  async createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    const createdCompany = await this.createCompanyUseCaseProxy
      .getInstance()
      .execute(createCompanyDto);
    return new CompanyPresenter(createdCompany);
  }
}
