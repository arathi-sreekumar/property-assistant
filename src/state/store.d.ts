import { ThunkAction, Action } from '@reduxjs/toolkit';
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    buy: {
        homeCost: number;
        deposit: import("../types/state").depositType;
        stampDuty: import("../types/state").StampDutyType;
        conveyancingFee: number;
        surveyFee: number;
        valuationFee: number;
        totalCost: number;
    };
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        buy: {
            homeCost: number;
            deposit: import("../types/state").depositType;
            stampDuty: import("../types/state").StampDutyType;
            conveyancingFee: number;
            surveyFee: number;
            valuationFee: number;
            totalCost: number;
        };
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export default store;
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;
