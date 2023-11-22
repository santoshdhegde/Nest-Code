import { Injectable, Inject } from '@nestjs/common';

import { Email } from './email.entity';
import { EmailDto } from './dto/email.dto';
import { EMAIL_REPOSITORY } from '../../core/constants';

@Injectable()
export class EmailService {
    constructor(@Inject(EMAIL_REPOSITORY) private readonly emailRepository: typeof Email) { }

    async create(user: EmailDto): Promise<Email> {
        return await this.emailRepository.create<Email>(user);
    }

    async findOneByEmail(email: string): Promise<Email> {
        return await this.emailRepository.findOne<Email>({ where: { from_address: email } });
    }

    async findOneById(id: number): Promise<Email> {
        return await this.emailRepository.findOne<Email>({ where: { id } });
    }

}
