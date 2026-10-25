interface SectionHeadingProps {
  title: string;
  description: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-2 border-b border-border pb-4 text-start">
      <h2 className="text-foreground">{title}</h2>
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
