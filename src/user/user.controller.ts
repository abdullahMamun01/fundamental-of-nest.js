import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { GtQueryDto } from './user.query';
import { ZodValidationPipe } from 'src/ZodValidationPipe';
import { UserDto, userZodSchmea } from './dto/user.validation';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAllUsers(@Query() query: {page: string, limit: string, age: string, name: string, email: string}) {
        console.log(query , 'quereis')
        return this.userService.getAllUsers(query);
    }

    @Get(':id')
    findUserById(@Param('id') id: number) {
        return this.userService.getUserById(Number(id));
    }

    @Post()
    createUser(@Body() payload: UserDto) {
        return this.userService.createUser(payload)
    }


    @Patch(':id')
    updateUserById(@Param('id') id: number , @Body() payload: any) {
        return this.userService.updateUserById(Number(id) , payload);
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: number) {
        return this.userService.deleteUserById(Number(id));
    }
}