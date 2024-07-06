import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfigModule } from '../config/typeorm/typeorm.module';
import { DatabaseCompanyRepository } from 'src/modules/core/company/infrastructure/company.repository';
import { Company } from 'src/modules/core/company/infrastructure/company.entity';

@Module({
  imports: [TypeormConfigModule, TypeOrmModule.forFeature([Company])],
  providers: [DatabaseCompanyRepository],
  exports: [DatabaseCompanyRepository],
})
export class RepositoriesModule {}
