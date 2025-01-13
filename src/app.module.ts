import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guards';
import { RolesGuard } from './auth/RolesGuard ';

@Module({
  imports: [UserModule, ProfileModule, EmployeesModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
