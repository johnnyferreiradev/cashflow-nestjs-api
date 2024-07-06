import { Module } from '@nestjs/common';

import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { EnvironmmentConfigModule } from './infrastructure/config/environmment-config/environmment-config.module';

@Module({
  imports: [
    LoggerModule,
    ExceptionsModule,
    UsecasesProxyModule.register(),
    ControllersModule,
    EnvironmmentConfigModule,
  ],
  providers: [],
})
export class AppModule {}
