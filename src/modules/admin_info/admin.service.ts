import { Injectable, Inject } from '@nestjs/common';
import {RedisCacheService} from '../../core/cache/redisCache.service';

@Injectable()

export class AdminService { constructor(
    private redisCacheService: RedisCacheService
  ) {}


    async findOneById(Id: string): Promise<any> {
      let data;
      try{
        // find the beneficiary with this id
        await this.redisCacheService.set(Id,{"id":98258,"name":"The Jamie Gillies Memorial Scholarship Fund","name_auto":"The Jamie Gillies Memorial Scholarship Fund","nameplaintext":"jamiegilliesmemorialscholarshipfund","other_names":"","class_name":"Beneficiary","business_number":"893217968RR0001","country_code":"CA","avatar":null,"slug":"the-jamie-gillies-memorial-scholarship-fund","city":"Lasalle","province":"ON","country":[],"country_name":[],"designation":"Charitable Organization","description":"Funding culinary arts scholarships at Fanshaw College.","formatted_description":"Funding culinary arts scholarships at Fanshaw College.","postal_code":"N9J0B6","activity_description_original":"Funding culinary arts scholarships at Fanshaw College.","activity_description_new":null,"contact_url":null,"missing_staging_record":false,"is_revoked":true,"causes":[{"display_name":"Education and research","name":"education"},{"display_name":"Arts and culture","name":"arts"}],"tags":[{"name":"college"},{"name":"post-secondary"},{"name":"scholarship"}],"location":{"lat":42.234578,"lon":-83.065061},"charity_size":"Mini ($0 - $69,999)","status":"revoked","language":"English","created_at":1273695409,"updated_at":1585665952})
        data = await this.redisCacheService.get(Id);
      }catch(err){
        console.log(err);
      }
      return data;
    }
}
