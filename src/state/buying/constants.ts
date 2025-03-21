import { SelectOptionType } from "../../types/form";
import { BuyerObjectType } from "../../types/state";

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

