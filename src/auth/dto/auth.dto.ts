import { z } from 'zod';

export const sighnUpSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .max(30, { message: 'Name must be at most 30 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string({
    required_error: 'Password is required',
  }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string({
    required_error: 'Password is required',
  }),
});
export type LoginDto = z.infer<typeof loginSchema>;
export type SignupDto = z.infer<typeof sighnUpSchema>;
