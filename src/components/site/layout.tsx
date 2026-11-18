export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`text-[0.8125rem] uppercase tracking-widest font-semibold mb-3 ${light ? "text-accent" : "text-accent-ink"}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-balance ${light ? "text-background" : "text-primary"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? "text-background/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
