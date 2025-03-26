import { SelectOptionType } from "../../types/form";
import { BuyerObjectType } from "../../types/state";

export const INITIAL_HOME_COST = 120000
export const INITIAL_DEPOSIT = 0.1 * INITIAL_HOME_COST
export const INITIAL_CONVEYANCING_FEE = 1000
export const INITIAL_SURVEY_FEE = 500
export const INITIAL_TOTAL_COST =
  INITIAL_HOME_COST +
  INITIAL_CONVEYANCING_FEE +
  INITIAL_SURVEY_FEE

export const DepositUnits: SelectOptionType[] = [
  {
    optionValue: 'cash',
    displayValue: '£'
  },
  {
    optionValue: 'percentage',
    displayValue: '%'
  }
]

export const BUYER_TYPE: BuyerObjectType = {
  firstTime: 'firstTime',
  singleHome: 'singleHome',
  secondHome: 'secondHome',
  buyToLet: 'buyToLet'
}

export const BuyerTypesList: SelectOptionType[] = [
  {
    optionValue: BUYER_TYPE.firstTime,
    displayValue: 'First Time Buyer'
  },
  {
    optionValue: BUYER_TYPE.singleHome,
    displayValue: 'Single Home Buyer'
  },
  {
    optionValue: BUYER_TYPE.secondHome,
    displayValue: 'Second Home Buyer'
  },
  {
    optionValue: BUYER_TYPE.buyToLet,
    displayValue: 'Buy to Let'
  }
]

