import { useFormContext } from 'react-hook-form';

import { FormData } from '@/App';
import { useStepper } from '@/components/Stepper/useStepper';

import { StepHeader } from '../../StepHeader';
import { StepperFooter, StepperNextButton } from '../../Stepper';
import { Input } from '../../ui/Input';
import { Label } from '../../ui/Label';

export function AccountStep() {
  const { formState, register, trigger } = useFormContext<FormData>();

  const { nextStep } = useStepper();

  const handleNextStep = async () => {
    const isValid = await trigger('accountStep');

    if (isValid) {
      nextStep();
    }
  };

  return (
    <div>
      <StepHeader
        title="Conta"
        description="Seus dados de acesso à plataforma"
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" {...register('accountStep.email')} />
          {formState.errors.accountStep?.email && (
            <small className="text-destructive-foreground">
              {formState.errors.accountStep?.email?.message}
            </small>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            {...register('accountStep.password')}
          />
          {formState.errors.accountStep?.password && (
            <small className="text-destructive-foreground">
              {formState.errors.accountStep?.password?.message}
            </small>
          )}
        </div>
      </div>

      <StepperFooter>
        <StepperNextButton onClick={handleNextStep} />
      </StepperFooter>
    </div>
  );
}
