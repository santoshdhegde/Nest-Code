import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request, UseFilters } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HttpExceptionFilter } from '../../core/exception/http-exception.filter';

import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @UseGuards(AuthGuard('jwt'))
    @UseFilters(new HttpExceptionFilter())
    @Get(':Id')
    async findOne(@Param('Id') Id: string): Promise<any> {
       
        const response = await this.adminService.findOneById(Id);
       
        if (!response) {
            throw new NotFoundException('This Id doesn\'t exist');
        }

        
        return response;
    }
}
