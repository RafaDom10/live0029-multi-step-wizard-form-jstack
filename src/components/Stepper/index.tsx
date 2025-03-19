import { createContext, useCallback, useMemo, useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '../ui/Button';

import { useStepper } from './useStepper';

interface IStepperContextValue {
  previousStep: VoidFunction;
  nextStep: VoidFunction;
}

export const StepperContext = createContext({} as IStepperContextValue);

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
      <div>
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
      </div>
    </StepperContext.Provider>
  );
}

export function StepperFooter({ children }: { children: React.ReactNode }) {
  return <footer className="mt-6 flex justify-end gap-2">{children}</footer>;
}

export function StepperPreviousButton({
  size = 'sm',
  variant = 'secondary',
  type = 'button',
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const { previousStep } = useStepper();

  return (
    <Button
      variant={variant}
      size={size}
      type={type}
      onClick={onClick ?? previousStep}
      {...props}
    >
      Voltar
    </Button>
  );
}

export function StepperNextButton({
  size = 'sm',
  type = 'button',
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const { nextStep } = useStepper();

  return (
    <Button size={size} type={type} onClick={onClick ?? nextStep} {...props}>
      Próximo
    </Button>
  );
}
