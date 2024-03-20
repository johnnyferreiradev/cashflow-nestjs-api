import { Module } from '@nestjs/common';
import { UserModule } from './core/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './core/company/company.module';
import { AddressModule } from './core/address/address.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [__dirname + '**/*/entities/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: false,
    }),
    UserModule,
    CompanyModule,
    AddressModule,
  ],
})
export class AppModule {}
