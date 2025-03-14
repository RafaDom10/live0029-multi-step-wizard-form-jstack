import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { StepHeader } from '../StepHeader';
import { StepperFooter, StepperNextButton } from '../Stepper';
import { useStepper } from '../Stepper/useStepper';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';

const schema = z.object({
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(6, 'Informe a senha'),
});

type FormData = z.infer<typeof schema>;

export function AccountStep() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
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
        title="Conta"
        description="Seus dados de acesso à plataforma"
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" {...form.register('email')} />
          {form.formState.errors.email && (
            <small className="text-destructive-foreground">
              {form.formState.errors.email?.message}
            </small>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" {...form.register('password')} />
          {form.formState.errors.password && (
            <small className="text-destructive-foreground">
              {form.formState.errors.password?.message}
            </small>
          )}
        </div>
      </div>

      <StepperFooter>
        <StepperNextButton preventDefault type="submit" />
      </StepperFooter>
    </form>
  );
}
