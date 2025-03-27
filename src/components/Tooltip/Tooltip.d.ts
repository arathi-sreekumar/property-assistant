type Props = {
    content: string;
    direction?: "top" | "bottom" | "left" | "right";
    delay?: number;
    children: React.ReactNode;
};
declare const Tooltip: ({ content, direction, delay, children, }: Props) => import("react/jsx-runtime").JSX.Element;
export default Tooltip;
