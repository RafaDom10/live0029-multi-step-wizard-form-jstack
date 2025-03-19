import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Stepper } from './components/Stepper';
import { AccountStep } from './components/steps/AccountStep';
import { accountStepSchema } from './components/steps/AccountStep/schema';
import { AddressDataStep } from './components/steps/AddressDataStep';
import { addressStepSchema } from './components/steps/AddressDataStep/schema';
import { PersonalDataStep } from './components/steps/PersonalDataStep';
import { personalDataStepSchema } from './components/steps/PersonalDataStep/schema';
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

const schema = z.object({
  accountStep: accountStepSchema,
  personalStep: personalDataStepSchema,
  addressStep: addressStepSchema,
});

export type FormData = z.infer<typeof schema>;

export function App() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      accountStep: {
        email: '',
        password: '',
      },
      personalStep: {
        cpf: '',
        lastName: '',
        name: '',
      },
      addressStep: {
        state: '',
        city: '',
        street: '',
      },
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log({
      ...data.accountStep,
      ...data.personalStep,
      ...data.addressStep,
    });
  });

  return (
    <ThemeProvider defaultTheme="system">
      <div className="flex min-h-screen justify-center pt-40">
        <FormProvider {...form}>
          <form onSubmit={handleSubmit}>
            <Stepper steps={STEPS} />
          </form>
        </FormProvider>
      </div>
    </ThemeProvider>
  );
}
