import { NavLinkProps } from "react-router";

import { ButtonStyles } from "../../../types/form";
import { LinkButtonUI } from "./LinkButton.css";

interface OwnProps {
  styleType?: ButtonStyles;
  to: string;
}

type LinkButtonProps = Partial<Omit<NavLinkProps, keyof OwnProps>> & OwnProps

export const LinkButton = ({
  children,
  styleType = 'primary',
  to = '/',
  ...props
}: LinkButtonProps) => {
  return (
    <LinkButtonUI className={styleType} to={to} {...props}>
      {children}
    </LinkButtonUI>
  )
}
