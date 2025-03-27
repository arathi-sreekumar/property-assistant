import { UnitType } from "../types/form";
import { UnitTypes } from "../types/state";
export declare const getUnit: (type: string) => UnitType;
export declare const getValueWithUnit: (value: string, unit?: UnitTypes) => string;
