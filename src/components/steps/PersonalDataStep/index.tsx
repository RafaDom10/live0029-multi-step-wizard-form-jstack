import { useFormContext } from 'react-hook-form';

import { FormData } from '@/App';
import { useStepper } from '@/components/Stepper/useStepper';

import { StepHeader } from '../../StepHeader';
import {
  StepperFooter,
  StepperNextButton,
  StepperPreviousButton,
} from '../../Stepper';
import { Input } from '../../ui/Input';
import { Label } from '../../ui/Label';

export function PersonalDataStep() {
  const { register, formState, trigger } = useFormContext<FormData>();

  const { nextStep } = useStepper();

  const handleNextStep = async () => {
    const isValid = await trigger('personalStep');

    if (isValid) {
      nextStep();
    }
  };

  return (
    <div>
      <StepHeader
        title="Dados pessoais"
        description="Conte-nos mais sobre você"
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nome</Label>
          <Input id="firstName" {...register('personalStep.name')} />
          {formState.errors.personalStep?.name && (
            <small className="text-destructive-foreground">
              {formState.errors.personalStep?.name?.message}
            </small>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Sobrenome</Label>
          <Input id="lastName" {...register('personalStep.lastName')} />
          {formState.errors.personalStep?.lastName && (
            <small className="text-destructive-foreground">
              {formState.errors.personalStep?.lastName?.message}
            </small>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="cpf">CPF</Label>
          <Input id="cpf" {...register('personalStep.cpf')} />
          {formState.errors.personalStep?.cpf && (
            <small className="text-destructive-foreground">
              {formState.errors.personalStep?.cpf?.message}
            </small>
          )}
        </div>
      </div>
      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton onClick={handleNextStep} />
      </StepperFooter>
    </div>
  );
}
