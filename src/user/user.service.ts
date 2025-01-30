import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { users } from 'db';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.validation';

@Injectable()
export class UserService {
  private usersDB = users;

  constructor(private prisma: PrismaService) {}
  async getAllUsers() {
    const users = await this.prisma.user.findMany();

    return users;
  }

  async createUser(payload: UserDto) {
    const createUser = await this.prisma.user.create({
      data: payload as Prisma.UserCreateInput,
    });
    return createUser;
  }


  getUserById(id: number) {
    return this.usersDB.find((user) => user.id === id);
  }

  deleteUserById(id: number) {
    this.usersDB = this.usersDB.filter((user) => user.id !== id);
    return users.find((user) => user.id == id);
  }

  updateUserById(id: number, payload: any) {
    let user = this.usersDB.find((user) => user.id == id);
    user = { ...user, ...payload };
    this.usersDB = this.usersDB.map((item) => (item.id === id ? user : item));

    return user;
  }
}
