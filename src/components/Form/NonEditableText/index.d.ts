import { UnitTypes } from "../../../types/state";
type OwnProps = {
    value: string | number;
    unit?: UnitTypes;
    classes?: string;
};
type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;
export declare const NonEditableText: ({ value, unit, classes }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
