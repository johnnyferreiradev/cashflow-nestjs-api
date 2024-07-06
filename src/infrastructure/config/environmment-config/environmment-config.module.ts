import { Module } from '@nestjs/common';
import { EnvironmmentConfigService } from './environmment-config.service';

@Module({
  providers: [EnvironmmentConfigService]
})
export class EnvironmmentConfigModule {}
