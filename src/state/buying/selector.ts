import { RootState } from "../store"

export const selectHomeBuyingCost = (state: RootState) => {
  return state.buy.homeCost
}

export const selectDeposit = (state: RootState) => {
  return state.buy.deposit
}

export const selectStampDuty = (state: RootState) => {
  return state.buy.stampDuty
}

export const selectConveyancingFee = (state: RootState) => {
  return state.buy.conveyancingFee
}

export const selectTotalCost = (state: RootState) => {
  return state.buy.totalCost
}