import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { EmployeesModule } from './employees/employees.module';


@Module({
  imports: [UserModule, ProfileModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
