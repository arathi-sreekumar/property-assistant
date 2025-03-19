export type UnitTypes = 'cash' | 'percentage'

export type depositType = {
  unit: UnitTypes,
  value: number | string,
}

export type BuyingState = {
  homeCost: number,
  deposit: depositType,
}