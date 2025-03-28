interface IStepHeaderProps {
  title: string;
  description: string;
}

export function StepHeader({ description, title }: IStepHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <span className="text-muted-foreground">{description}</span>
    </header>
  );
}
