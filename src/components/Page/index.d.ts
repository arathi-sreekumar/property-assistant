import { Content } from "./Content";
import { Header } from "./Header";
interface PageProps {
    children: React.ReactElement<typeof Header | typeof Content>[];
}
export declare const Page: {
    ({ children }: PageProps): import("react/jsx-runtime").JSX.Element;
    Header: ({ children, id, level, }: {
        children: import("react").ReactNode;
        id?: string;
        level?: 1 | 2 | 3 | 4 | 5 | 6;
    }) => import("react/jsx-runtime").JSX.Element;
    Content: ({ children, ...rest }: import("react").HTMLAttributes<HTMLDivElement> & {
        children: import("react").ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
};
export {};
