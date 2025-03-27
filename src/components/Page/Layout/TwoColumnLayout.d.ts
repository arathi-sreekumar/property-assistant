import { ReactNode } from "react";
import { PageType } from "../../../types/layout";
export type TwoColumnProps = {
    header?: ReactNode;
    children: ReactNode;
    pageType: PageType;
};
export declare const TwoColumnLayoutWithImage: ({ header: headerProp, pageType, children, }: TwoColumnProps) => import("react/jsx-runtime").JSX.Element;
