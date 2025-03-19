import { RootState } from "../store"

export const selectHomeBuyingCost = (state: RootState) => {
  return state.buy.homeCost
}

export const selectDeposit = (state: RootState) => {
  return state.buy.deposit
}