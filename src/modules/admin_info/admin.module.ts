import { Module } from '@nestjs/common';

import { AdminService } from './admin.service';
import { RedisCacheModule } from '../../core/cache/redisCache.module';
import { AdminController } from './admin.controller';

@Module({
  imports: [RedisCacheModule],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule { }
