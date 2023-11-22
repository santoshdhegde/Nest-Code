import { Module } from '@nestjs/common';

import { EmailService } from './email.service';
import { emailProviders } from './email.providers';
import { EmailController } from './email.controller';

@Module({
  providers: [EmailService, ...emailProviders],
  controllers: [EmailController],
})
export class EmailModule {}
