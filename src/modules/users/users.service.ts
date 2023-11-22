import { Injectable, Inject } from '@nestjs/common';

import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';

@Injectable()
export class UsersService {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) { }

    async create(user: UserDto): Promise<User> {
        return await this.userRepository.create<User>(user);
    }

    async findOneByEmail(email: string): Promise<User> {
        let user:User = new User({ id: 1, email: email , password: '$2b$10$3elcmT5KtvGAw2bfvISXrOiqHBqx63AqSXPdb0/HWOYWBgbm9/iCq', name: 'name', gender: 'male' });
        return user;
        // return await this.userRepository.findOne<User>({ where: { email } });
    }

    async findOneById(id: number): Promise<User> {
        return new User({ id: 1, email: "xxxx@xxxx.com" , password: '$2b$10$3elcmT5KtvGAw2bfvISXrOiqHBqx63AqSXPdb0/HWOYWBgbm9/iCq', name: 'name', gender: 'male' });
        
        // return await this.userRepository.findOne<User>({ where: { id } });
    }

}
