import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { ClusterModule } from '@liaoliaots/nestjs-redis';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { RedisCacheService } from './redisCache.service';

@Module({
  imports: [RedisModule.forRoot({
    config:{ 
      host: new ConfigService().get('REDIS_HOST'),
      port: new ConfigService().get('REDIS_PORT')
    }
  }, true)],
  // imports: [ClusterModule.forRoot({
  //   config:{ 
  //     nodes:[{host: new ConfigService().get('REDIS_HOST'),
  //     port: new ConfigService().get('REDIS_PORT')}]
  //   }
  // }, true)],
  providers: [RedisCacheService],
  exports: [RedisCacheService]
})
export class RedisCacheModule {}
