import { Injectable } from '@nestjs/common';
// import { InjectCluster } from '@liaoliaots/nestjs-redis';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';
@Injectable()
export class RedisCacheService {
  // constructor(@InjectCluster() private readonly client: Cluster) {
  //   client = new Redis.Cluster([{
  //         host: new ConfigService().get('REDIS_HOST'),
  //         port: new ConfigService().get('REDIS_PORT')
  //       }])
  // }
  constructor(@InjectRedis() private readonly client: Redis) {}
  async get(beneficiaryId: string): Promise<any> {
    return await this.client.hget("consolidate_bn", beneficiaryId);
  }

  async set(beneficiaryId: string, data: any): Promise<any> {
    return await this.client.hset("consolidate_bn", beneficiaryId, JSON.stringify(data));
  }
}
