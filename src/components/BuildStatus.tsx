import Image from "next/image";

export function BuildStatus() {
  return (
    <a
      href="https://github.com/Tuhama/portfolio/actions/workflows/production.yml"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        alt="Build Status"
        loading="lazy"
        src="https://github.com/Tuhama/portfolio/actions/workflows/production.yml/badge.svg"
        width={200}
        height={32}
      />
    </a>
  );
}
