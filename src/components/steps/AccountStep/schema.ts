import { z } from 'zod';

export const accountStepSchema = z.object({
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(6, 'Informe a senha'),
});
