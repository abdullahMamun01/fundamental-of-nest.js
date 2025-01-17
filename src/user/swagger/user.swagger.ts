import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export class UserSwagger {
  static createUser() {
    return applyDecorators(
      ApiOperation({ summary: 'Create a new user' }),
      ApiResponse({
        status: 201,
        description: 'User has been successfully created.',
        schema: {
          example: [
            {
              id: 1,
              name: 'John Doe',
              email: 'admin@gmail.com',
              age: 24,
              roles: 'admin',
            },
          ],
        },
      }),
      ApiResponse({ status: 400, description: 'Bad Request.' }),
      ApiResponse({ status: 500, description: 'Internal Server Error.' }),
    );
  }

  static singleUser() {
    return applyDecorators(
      ApiOperation({ summary: 'Get a single user' }),
      ApiResponse({
        status: 200,
        description: 'User has been successfully fetched.',
        schema: {
          example: {
            id: 1,
            name: 'John Doe',
            email: 'admin@gmail.com',
            age: 24,
            roles: 'admin',
          },
        },
      }),
      ApiResponse({ status: 400, description: 'Bad Request.' }),
      ApiResponse({ status: 500, description: 'Internal Server Error.' }),
    );
  }
}
