import { z } from 'zod';

export const personalDataStepSchema = z.object({
  name: z.string().min(1, 'Informe o nome'),
  lastName: z.string().min(1, 'Informe o sobrenome'),
  cpf: z.string().min(6, 'Informe o CPF'),
});
