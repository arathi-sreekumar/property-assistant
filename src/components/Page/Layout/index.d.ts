import { PageType } from "../../../types/layout";
import { TwoColumnProps } from "./TwoColumnLayout";
type OwnProps = {
    pageType: PageType;
};
type Props = React.HTMLAttributes<HTMLDivElement> & OwnProps & TwoColumnProps;
export declare const Layout: ({ header, pageType, children, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
