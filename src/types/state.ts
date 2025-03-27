export type UnitTypes = 'cash' | 'percentage'

export type depositType = {
  unit: UnitTypes,
  value: number,
}

export type BuyerTypes = 'firstTime' | 'singleHome' | 'secondHome' | 'buyToLet'

export type BuyerObjectType = {
  [key: string]: BuyerTypes
}

export type StampDutyType = {
  buyerType: BuyerTypes
  value: number
}

export type BuyingState = {
  homeCost: number,
  deposit: depositType,
  stampDuty: StampDutyType,
  conveyancingFee: number,
  surveyFee: number,
  valuationFee: number,
  totalCost: number,
  yourCost: number,
}