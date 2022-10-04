import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...props
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  return (
    <Link {...props}
      className={asPath === props.href ? activeClassName : ""}
    >
      {children}
    </Link>
  );
}
