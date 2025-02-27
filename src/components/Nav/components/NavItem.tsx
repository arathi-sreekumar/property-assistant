import { NavLinkProps } from "react-router";

import { ButtonStyles } from "../../../types/form";
import { NavItemUI } from "./NavItem.css";

interface OwnProps {
  styleType?: ButtonStyles;
  to: string;
}

type LinkButtonProps = Partial<Omit<NavLinkProps, keyof OwnProps>> & OwnProps

export const NavItem = ({
  children,
  styleType = 'primary',
  to = '/',
  ...props
}: LinkButtonProps) => {
  return (
    <NavItemUI className={styleType} to={to} {...props}>
      {children}
    </NavItemUI>
  )
}
