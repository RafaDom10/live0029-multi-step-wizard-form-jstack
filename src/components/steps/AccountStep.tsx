import { StepHeader } from '../StepHeader';
import { StepperFooter, StepperNextButton } from '../Stepper';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';

export function AccountStep() {
  return (
    <div>
      <StepHeader
        title="Conta"
        description="Seus dados de acesso à plataforma"
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" />
        </div>
      </div>

      <StepperFooter>
        <StepperNextButton />
      </StepperFooter>
    </div>
  );
}
