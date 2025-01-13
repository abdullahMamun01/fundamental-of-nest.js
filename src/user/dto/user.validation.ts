import { z } from 'zod';

export const userZodSchmea = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .max(30, { message: 'Name must be at most 30 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  age: z
    .number()
    .min(0, { message: 'Age cannot be negative' })
    .max(100, { message: 'Age must be at most 100' }),
  password: z.string().optional(),
  
});


export type UserDto = z.infer<typeof userZodSchmea>;
