import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { cn } from '@/lib/utils';

import { Button } from './ui/Button';

interface IStepperContextValue {
  previousStep: VoidFunction;
  nextStep: VoidFunction;
}

const StepperContext = createContext({} as IStepperContextValue);

interface IStepperProps {
  initialState?: number;
  steps: {
    label: string;
    content: React.ReactNode;
  }[];
}

export function Stepper({ initialState = 0, steps }: IStepperProps) {
  const [currentStep, setCurrentStep] = useState(initialState);

  const previousStep = useCallback(() => {
    setCurrentStep((prevState) => Math.max(0, prevState - 1));
  }, []);

  const nextStep = useCallback(() => {
    setCurrentStep((prevState) => Math.min(steps.length - 1, prevState + 1));
  }, [steps.length]);

  const values = useMemo(
    () => ({
      previousStep,
      nextStep,
    }),
    [nextStep, previousStep],
  );

  return (
    <StepperContext.Provider value={values}>
      <ul className="space-x-6">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className={cn(
              'inline-block rounded-md px-2 py-1 text-xs',
              index === currentStep && 'bg-primary text-primary-foreground',
            )}
          >
            {String(index + 1).padStart(2, '0')}. {step.label}
          </li>
        ))}
      </ul>

      <div className="mt-10">{steps[currentStep].content}</div>
    </StepperContext.Provider>
  );
}

export function StepperPreviousButton() {
  const { previousStep } = useContext(StepperContext);

  return (
    <Button variant="secondary" size="sm" type="button" onClick={previousStep}>
      Voltar
    </Button>
  );
}

export function StepperNextButton() {
  const { nextStep } = useContext(StepperContext);

  return (
    <Button size="sm" type="button" onClick={nextStep}>
      Próximo
    </Button>
  );
}
