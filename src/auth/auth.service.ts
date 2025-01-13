import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { users } from 'db';

@Injectable()
export class AuthService {
  private readonly users: any[] = users

  constructor(private jwtService: JwtService) {}
  createUser(payload: any) {
    this.users.push(payload);
    return payload;
  }

  login(payload: LoginDto) {
    const user = this.users.find((user) => user.email === payload.email);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    if (user.password !== payload.password) {
      throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
    }
    const paylaod = { id: user.id, email: user.email ,role: user.roles};
    console.log(paylaod)
    const token = this.jwtService.sign(paylaod);
    return {
        user,
        token
    };
  }
}
