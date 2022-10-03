import Link, { LinkProps } from "next/link";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
  activeClassName: string;
}

export function ActiveLink({ children, href }: ActiveLinkProps) {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
}
