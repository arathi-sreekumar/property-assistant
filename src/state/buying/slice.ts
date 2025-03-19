import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BuyingState, depositType } from "../../types/state"
import { getNewDepositValue } from "../../utils/calculateCosts"

const initialState: BuyingState = {
  homeCost: 120000,
  deposit: {
    unit: 'cash',
    value: 12000
  },
}

export const BuyingSlice = createSlice({
  name: 'buy',
  initialState,
  reducers: {
    setHomeCost: (
      state: BuyingState,
      action: PayloadAction<number>
    ) => {
      state.deposit = getNewDepositValue({
        deposit: state.deposit,
        homeCost: state.homeCost,
        newHomeCost: action.payload
      })
      state.homeCost = action.payload
    },
    setDeposit: (
      state: BuyingState,
      action: PayloadAction<depositType>
    ) => {
      state.deposit = action.payload
    },
  },
})
