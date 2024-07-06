import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { CompanyController } from 'src/modules/core/company/infrastructure/controllers/company.controller';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [CompanyController],
})
export class ControllersModule {}
