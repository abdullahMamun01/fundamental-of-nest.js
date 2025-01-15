import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role, Roles, ROLE_KEY } from './roles.decorator';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Role, context.getHandler());
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLE_KEY, [
      context.getHandler(),
      context.getClass(),
    ])
    
   if(!requiredRoles) return true

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log(requiredRoles)
    return this.matchRoles(requiredRoles, user.role);
  }

  private matchRoles(roles: string[], role: string): boolean {
    if (roles.includes(role)) {
      return true;
    }

    return false;
  }
}
