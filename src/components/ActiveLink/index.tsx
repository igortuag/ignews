import Link, { LinkProps } from "next/link";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...props
}: ActiveLinkProps) {
  return (
    <Link {...props}>
      <a>{children}</a>
    </Link>
  );
}
