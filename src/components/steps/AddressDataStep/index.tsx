import { useFormContext } from 'react-hook-form';

import { FormData } from '@/App';

import { StepHeader } from '../../StepHeader';
import { StepperFooter, StepperPreviousButton } from '../../Stepper';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Label } from '../../ui/Label';

export function AddressDataStep() {
  const { register, formState } = useFormContext<FormData>();

  return (
    <div>
      <StepHeader title="Endereço" description="De onde você é?" />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <Input id="state" {...register('addressStep.state')} />
          {formState.errors.addressStep?.state && (
            <small className="text-destructive-foreground">
              {formState.errors.addressStep.state?.message}
            </small>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input id="city" {...register('addressStep.city')} />
          {formState.errors.addressStep?.city && (
            <small className="text-destructive-foreground">
              {formState.errors.addressStep?.message}
            </small>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="street">Endereço</Label>
          <Input id="street" {...register('addressStep.street')} />
          {formState.errors.addressStep?.street && (
            <small className="text-destructive-foreground">
              {formState.errors.addressStep?.street?.message}
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
    </div>
  );
}
