import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ title, subtitle, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", align === "center" ? "text-center mx-auto" : "text-left", className)}>
      <h2 className="font-syne text-4xl font-bold tracking-tight text-brand-navy md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg text-gray-600 max-w-2xl md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}