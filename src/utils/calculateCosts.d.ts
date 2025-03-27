import { depositType } from "../types/state";
type NewDepositCalcProps = {
    homeCost: string | number;
    deposit: depositType;
    newHomeCost: string | number;
};
export declare const getNewDepositValue: ({ deposit, homeCost, newHomeCost }: NewDepositCalcProps) => depositType;
export {};
