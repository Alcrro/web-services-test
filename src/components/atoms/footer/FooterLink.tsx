// atoms/footer/FooterLink.tsx
import Link from "next/link";

interface FooterLinkProps {
  name: string;
  link?: string;
  disabled?: boolean;
}

export default function FooterLink({
  name,
  link = "#",
  disabled,
}: FooterLinkProps) {
  return (
    <Link
      href={disabled ? "#" : link}
      className={`text-sm hover:underline ${
        disabled ? "opacity-40 pointer-events-none" : ""
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </Link>
  );
}
