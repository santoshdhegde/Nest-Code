import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request, UseFilters } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { EmailService } from './email.service';
import { Email as EmailEntity } from './email.entity';
import { EmailDto } from './dto/email.dto';
import { HttpExceptionFilter } from '../../core/exception/http-exception.filter';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) { }

    @UseGuards(AuthGuard('jwt'))
    @UseFilters(new HttpExceptionFilter())
    @Get(':emailId')
    async findOne(@Param('emailId') emailId: string): Promise<EmailEntity> {
        // find the email with this id
        const email = await this.emailService.findOneByEmail(emailId);

        // if the email doesn't exit in the db, throw a 404 error
        if (!email) {
            throw new NotFoundException('This email doesn\'t exist');
        }

        // if email exist, return the email
        return email;
    }
}
