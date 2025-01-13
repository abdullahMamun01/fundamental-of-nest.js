import { Body, Controller, Get, HttpCode, HttpStatus, Post, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'src/ZodValidationPipe';
import { LoginDto, loginSchema, sighnUpSchema, SignupDto } from './dto/auth.dto';
import { sign } from 'crypto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('signup')
    @UsePipes(new ZodValidationPipe(sighnUpSchema))
    signup(@Body() payload: SignupDto) {
        return payload
    }
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @UsePipes(new ZodValidationPipe(loginSchema))
    login(@Body() payload: LoginDto) {
        return this.authService.login(payload);
    }
}
