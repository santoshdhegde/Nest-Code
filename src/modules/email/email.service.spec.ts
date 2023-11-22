import { Test, TestingModule } from '@nestjs/testing';

import { EmailService } from './email.service';
import { emailProviders } from './email.providers';
import { EmailController } from './email.controller';


describe('UsersService', () => {
  let service: EmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailService, ...emailProviders],
      controllers: [EmailController],
    }).compile();

    service = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
