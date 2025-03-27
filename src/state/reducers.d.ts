declare const reducers: {
    buy: import("redux").Reducer<{
        homeCost: number;
        deposit: import("../types/state").depositType;
        stampDuty: import("../types/state").StampDutyType;
        conveyancingFee: number;
        surveyFee: number;
        valuationFee: number;
        totalCost: number;
    }>;
};
export declare const rootReducer: import("redux").Reducer<{
    buy: {
        homeCost: number;
        deposit: import("../types/state").depositType;
        stampDuty: import("../types/state").StampDutyType;
        conveyancingFee: number;
        surveyFee: number;
        valuationFee: number;
        totalCost: number;
    };
}, import("redux").UnknownAction, Partial<{
    buy: {
        homeCost: number;
        deposit: import("../types/state").depositType;
        stampDuty: import("../types/state").StampDutyType;
        conveyancingFee: number;
        surveyFee: number;
        valuationFee: number;
        totalCost: number;
    } | undefined;
}>>;
export default reducers;
