import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { StepHeader } from '../StepHeader';
import {
  StepperFooter,
  StepperNextButton,
  StepperPreviousButton,
} from '../Stepper';
import { useStepper } from '../Stepper/useStepper';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';

const schema = z.object({
  name: z.string().min(1, 'Informe o nome'),
  lastName: z.string().min(1, 'Informe o sobrenome'),
  cpf: z.string().min(6, 'Informe o CPF'),
});

type FormData = z.infer<typeof schema>;

export function PersonalDataStep() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      lastName: '',
      cpf: '',
    },
  });

  const { nextStep } = useStepper();

  const handleSubmit = form.handleSubmit((formData) => {
    // eslint-disable-next-line no-console
    console.log(formData);
    nextStep();
  });

  return (
    <form onSubmit={handleSubmit}>
      <StepHeader
        title="Dados pessoais"
        description="Conte-nos mais sobre você"
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nome</Label>
          <Input id="firstName" {...form.register('name')} />
          {form.formState.errors.name && (
            <small className="text-destructive-foreground">
              {form.formState.errors.name?.message}
            </small>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Sobrenome</Label>
          <Input id="lastName" {...form.register('lastName')} />
          {form.formState.errors.lastName && (
            <small className="text-destructive-foreground">
              {form.formState.errors.lastName?.message}
            </small>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="cpf">CPF</Label>
          <Input id="cpf" {...form.register('cpf')} />
          {form.formState.errors.cpf && (
            <small className="text-destructive-foreground">
              {form.formState.errors.cpf?.message}
            </small>
          )}
        </div>
      </div>
      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton preventDefault type="submit" />
      </StepperFooter>
    </form>
  );
}
