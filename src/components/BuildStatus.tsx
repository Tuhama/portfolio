import Image from "next/image";

export function BuildStatus({ alt }: { alt: string }) {
  return (
    <a
      href="https://github.com/Tuhama/portfolio/actions/workflows/production.yml"
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-[200px] shrink-0 overflow-hidden"
    >
      <Image
        alt={alt}
        loading="lazy"
        src="https://github.com/Tuhama/portfolio/actions/workflows/production.yml/badge.svg"
        width={200}
        height={32}
        className="h-8 w-auto max-w-full"
      />
    </a>
  );
}
