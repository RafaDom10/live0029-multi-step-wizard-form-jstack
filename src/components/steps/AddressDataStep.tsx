import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { StepHeader } from '../StepHeader';
import { StepperFooter, StepperPreviousButton } from '../Stepper';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';

const schema = z.object({
  state: z.string().min(1, 'Informe o estado'),
  city: z.string().min(1, 'Informe a cidade'),
  street: z.string().min(1, 'Informe o endereço'),
});

type FormData = z.infer<typeof schema>;

export function AddressDataStep() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      city: '',
      state: '',
      street: '',
    },
  });

  const handleSubmit = form.handleSubmit((formData) => {
    // eslint-disable-next-line no-console
    console.log(formData);
  });

  return (
    <form onSubmit={handleSubmit}>
      <StepHeader title="Endereço" description="De onde você é?" />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <Input id="state" {...form.register('state')} />
          {form.formState.errors.state && (
            <small className="text-destructive-foreground">
              {form.formState.errors.state?.message}
            </small>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input id="city" {...form.register('city')} />
          {form.formState.errors.city && (
            <small className="text-destructive-foreground">
              {form.formState.errors.city?.message}
            </small>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="street">Endereço</Label>
          <Input id="street" {...form.register('street')} />
          {form.formState.errors.street && (
            <small className="text-destructive-foreground">
              {form.formState.errors.street?.message}
            </small>
          )}
        </div>
      </div>

      <StepperFooter>
        <StepperPreviousButton />
        <Button type="submit" size="sm">
          Finalizar
        </Button>
      </StepperFooter>
    </form>
  );
}
