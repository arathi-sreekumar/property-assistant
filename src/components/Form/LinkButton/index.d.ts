import { NavLinkProps } from "react-router";
import { ButtonStyles } from "../../../types/form";
interface OwnProps {
    styleType?: ButtonStyles;
    to: string;
}
type LinkButtonProps = Partial<Omit<NavLinkProps, keyof OwnProps>> & OwnProps;
export declare const LinkButton: ({ children, styleType, to, ...props }: LinkButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
