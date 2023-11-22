import { Test, TestingModule } from '@nestjs/testing';

import { AdminService } from './admin.service';
import { RedisCacheModule } from '../../core/cache/redisCache.module';
import { AdminController } from './admin.controller';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RedisCacheModule],
      providers: [AdminService],
      controllers: [AdminController],

    }).compile();

    service = module.get<AdminService>(AdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
