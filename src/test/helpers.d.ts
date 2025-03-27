export declare const renderWithProvider: (ui: React.ReactNode) => {
    result: import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
    store: import("@reduxjs/toolkit").EnhancedStore<{
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
};
