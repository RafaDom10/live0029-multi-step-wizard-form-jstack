import { StepperPreviousButton } from '../Stepper';
import { Button } from '../ui/Button';

export function AddressDataStep() {
  return (
    <div>
      AddressDataStep
      <StepperPreviousButton />
      <Button type="submit" size="sm">
        Finalizar
      </Button>
    </div>
  );
}
