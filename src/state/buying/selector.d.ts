import { RootState } from "../store";
export declare const selectHomeBuyingCost: (state: RootState) => number;
export declare const selectDeposit: (state: RootState) => import("../../types/state").depositType;
export declare const selectStampDuty: (state: RootState) => import("../../types/state").StampDutyType;
export declare const selectConveyancingFee: (state: RootState) => number;
export declare const selectSurveyFee: (state: RootState) => number;
export declare const selectValuationFee: (state: RootState) => number;
export declare const selectTotalCost: (state: RootState) => number;
