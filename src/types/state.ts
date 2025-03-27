export type UnitTypes = 'cash' | 'percentage'

export type depositType = {
  unit: UnitTypes,
  value: number | string,
}

export type BuyerTypes = 'firstTime' | 'singleHome' | 'secondHome' | 'buyToLet'

export type BuyerObjectType = {
  [key: string]: BuyerTypes
}

export type StampDutyType = {
  buyerType: BuyerTypes
  value: number | string
}

export type BuyingState = {
  homeCost: number,
  deposit: depositType,
  stampDuty: StampDutyType,
  conveyancingFee: number,
  surveyFee: number,
  valuationFee: number,
  totalCost: number,
}