import { PayloadAction } from "@reduxjs/toolkit";
import { BuyerTypes, BuyingState, depositType } from "../../types/state";
export declare const BuyingSlice: import("@reduxjs/toolkit").Slice<{
    homeCost: number;
    deposit: depositType;
    stampDuty: import("../../types/state").StampDutyType;
    conveyancingFee: number;
    surveyFee: number;
    valuationFee: number;
    totalCost: number;
}, {
    setHomeCost: (state: BuyingState, action: PayloadAction<number>) => void;
    setDeposit: (state: BuyingState, action: PayloadAction<depositType>) => void;
    setStampDuty: (state: BuyingState, action: PayloadAction<BuyerTypes>) => void;
    setConveyancingFee: (state: BuyingState, action: PayloadAction<number>) => void;
    setSurveyFee: (state: BuyingState, action: PayloadAction<number>) => void;
    setValuationFee: (state: BuyingState, action: PayloadAction<number>) => void;
    setTotalCost: (state: BuyingState) => void;
    reset: () => BuyingState;
}, "buy", "buy", import("@reduxjs/toolkit").SliceSelectors<{
    homeCost: number;
    deposit: depositType;
    stampDuty: import("../../types/state").StampDutyType;
    conveyancingFee: number;
    surveyFee: number;
    valuationFee: number;
    totalCost: number;
}>>;
