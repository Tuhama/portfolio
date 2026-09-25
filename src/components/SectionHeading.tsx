interface SectionHeadingProps {
  title: string;
  description: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-4xl space-y-6 text-center">
      <h2 className="text-gradient text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl">
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
        {description}
      </p>
    </div>
  );
}
