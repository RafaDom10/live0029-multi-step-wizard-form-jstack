import { StepHeader } from '../StepHeader';
import { StepperFooter, StepperPreviousButton } from '../Stepper';
import { Button } from '../ui/Button';

export function AddressDataStep() {
  return (
    <div>
      <StepHeader title="Endereço" description="De onde você é?" />
      <StepperFooter>
        <StepperPreviousButton />
        <Button type="submit" size="sm">
          Finalizar
        </Button>
      </StepperFooter>
    </div>
  );
}
