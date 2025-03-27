export declare const useAppDispatch: import("react-redux").UseDispatch<import("redux-thunk").ThunkDispatch<{
    buy: {
        homeCost: number;
        deposit: import("../types/state").depositType;
        stampDuty: import("../types/state").StampDutyType;
        conveyancingFee: number;
        surveyFee: number;
        valuationFee: number;
        totalCost: number;
    };
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>>;
export declare const useAppSelector: import("react-redux").UseSelector<{
    buy: {
        homeCost: number;
        deposit: import("../types/state").depositType;
        stampDuty: import("../types/state").StampDutyType;
        conveyancingFee: number;
        surveyFee: number;
        valuationFee: number;
        totalCost: number;
    };
}>;
