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
;

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
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
  @UseGuards(AuthGuard)
  profile(@Request() req: any) {
    return req.user;
  }

  @Get(':id')
  findUserById(@Param('id') id: number) {
    return this.userService.getUserById(Number(id));
  }

  @Post()
  createUser(@Body(new ZodValidationPipe(userZodSchmea)) payload: UserDto) {
    return this.userService.createUser(payload);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard,RolesGuard)
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
