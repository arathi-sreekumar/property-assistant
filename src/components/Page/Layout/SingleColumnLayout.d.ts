import { ReactNode } from "react";
import { PageType } from "../../../types/layout";
export type SingleColumnProps = {
    header?: ReactNode;
    children: ReactNode;
    pageType: PageType;
};
export declare const SingleColumnLayout: ({ header: headerProp, pageType, children, }: SingleColumnProps) => import("react/jsx-runtime").JSX.Element;
