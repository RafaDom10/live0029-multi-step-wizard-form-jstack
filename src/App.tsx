import { Stepper } from './components/Stepper';
import { AccountStep } from './components/steps/AccountStep';
import { AddressDataStep } from './components/steps/AddressDataStep';
import { PersonalDataStep } from './components/steps/PersonalDataStep';
import { ThemeProvider } from './context/ThemeProvider';

const STEPS = [
  {
    label: 'Conta',
    content: <AccountStep />,
  },
  {
    label: 'Dados pessoais',
    content: <PersonalDataStep />,
  },
  {
    label: 'Endereço',
    content: <AddressDataStep />,
  },
];

export function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="flex min-h-screen justify-center pt-40">
        <Stepper steps={STEPS} />
      </div>
    </ThemeProvider>
  );
}
