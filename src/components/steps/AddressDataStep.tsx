import { StepHeader } from '../StepHeader';
import { StepperFooter, StepperPreviousButton } from '../Stepper';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';

export function AddressDataStep() {
  return (
    <div>
      <StepHeader title="Endereço" description="De onde você é?" />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <Input id="state" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input id="city" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="street">Endereço</Label>
          <Input id="street" />
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
