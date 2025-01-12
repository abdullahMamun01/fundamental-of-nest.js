import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodError, ZodSchema  } from 'zod';
import { extractErrorPaths } from './uritls/zodErrorPaths';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {

      throw new BadRequestException({
        message: 'Validation failed',
        errors: extractErrorPaths(error),
        statusCode: 4000
      });
    }
  }
}