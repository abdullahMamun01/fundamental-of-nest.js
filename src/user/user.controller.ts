import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ZodValidationPipe } from 'src/ZodValidationPipe';
import { UserDto, userZodSchmea } from './dto/user.validation';
import { AuthGuard } from 'src/auth/auth.guards';

import { RolesGuard } from 'src/auth/RolesGuard ';
import { Role, Roles } from 'src/auth/roles.decorator';
import { Public } from 'src/decorator/public.decorator';
import {
  ApiOperation,
  ApiParam,
  ApiProperty,
  ApiResponse,
} from '@nestjs/swagger';

import { UserSwagger } from './swagger/user.swagger';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Get()
  @UserSwagger.createUser()
  @ApiResponse({ status: 404, description: 'User not found.' })
  findAllUsers(
    @Query()
    query: {
      page: string;
      limit: string;
      age: string;
      name: string;
      email: string;
    },
  ) {
    return this.userService.getAllUsers(query);
  }

  @Get('profile')
  profile(@Request() req: any) {
    return req.user;
  }

  @Public()
  @UserSwagger.singleUser()
  @Get(':id')
  findUserById(@Param('id') id: number) {
    return this.userService.getUserById(Number(id));
  }

  @Post()
  createUser(@Body(new ZodValidationPipe(userZodSchmea)) payload: UserDto) {
    return this.userService.createUser(payload);
  }

  @Roles(Role.User)
  @Patch(':id')
  updateUserById(
    @Param('id') id: number,
    @Body(new ZodValidationPipe(userZodSchmea.partial())) payload: any,
  ) {
    return this.userService.updateUserById(Number(id), payload);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: number) {
    return this.userService.deleteUserById(Number(id));
  }
}
