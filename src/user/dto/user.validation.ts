import { z } from 'zod';

export const userZodSchmea = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .max(30, { message: 'Name must be at most 30 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  country: z.string({ invalid_type_error: 'country is required' }),
});

export type UserDto = z.infer<typeof userZodSchmea>;
