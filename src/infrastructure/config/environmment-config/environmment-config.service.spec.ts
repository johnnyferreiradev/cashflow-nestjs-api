import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmmentConfigService } from './environmment-config.service';

describe('EnvironmmentConfigService', () => {
  let service: EnvironmmentConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvironmmentConfigService],
    }).compile();

    service = module.get<EnvironmmentConfigService>(EnvironmmentConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
