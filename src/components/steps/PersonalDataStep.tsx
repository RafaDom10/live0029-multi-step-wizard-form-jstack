import { StepHeader } from '../StepHeader';
import {
  StepperFooter,
  StepperNextButton,
  StepperPreviousButton,
} from '../Stepper';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';

export function PersonalDataStep() {
  return (
    <div>
      <StepHeader
        title="Dados pessoais"
        description="Conte-nos mais sobre você"
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nome</Label>
          <Input id="firstName" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Sobrenome</Label>
          <Input id="lastName" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cpf">CPF</Label>
          <Input id="cpf" />
        </div>
      </div>
      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton />
      </StepperFooter>
    </div>
  );
}
