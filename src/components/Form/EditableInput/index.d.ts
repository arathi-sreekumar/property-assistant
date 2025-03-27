import { UnitTypes } from "../../../types/state";
import { SelectOptionType } from "../../../types/form";
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type FieldState = {
    unit: UnitTypes;
    value: string | number;
};
type OwnProps = {
    onSave: (fieldValues: FieldState) => void;
    value: number | string;
    unit: UnitTypes;
    additionalInfo?: string;
    unitOptions?: Array<SelectOptionType>;
    getValueForUnitChange?: (fieldValues: FieldState) => number;
};
type Props = InputProps & OwnProps;
export declare const EditableInput: ({ onSave, value, additionalInfo, unit, unitOptions, getValueForUnitChange, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
