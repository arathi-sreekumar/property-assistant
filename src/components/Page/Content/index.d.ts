import { ReactNode } from "react";
type OwnProps = {
    children: ReactNode;
};
type Props = React.HTMLAttributes<HTMLDivElement> & OwnProps;
export declare const Content: ({ children, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
