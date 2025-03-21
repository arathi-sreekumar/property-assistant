import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BuyerTypes, BuyingState, depositType } from "../../types/state"
import { getNewDepositValue } from "../../utils/calculateCosts"
import { calculateStampDuty } from "../../utils/stampDutyCalc"

const initialState: BuyingState = {
  homeCost: 120000,
  deposit: {
    unit: 'cash',
    value: 12000
  },
  stampDuty: {
    buyerType: 'firstTime',
    value: calculateStampDuty(12000, 'firstTime'),
  },
  conveyancingFee: 1000
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
      state.stampDuty.value = calculateStampDuty(action.payload, state.stampDuty.buyerType)
    },
    setDeposit: (
      state: BuyingState,
      action: PayloadAction<depositType>
    ) => {
      state.deposit = action.payload
    },
    setStampDuty: (
      state: BuyingState,
      action: PayloadAction<BuyerTypes>
    ) => {
      const value = calculateStampDuty(state.homeCost, action.payload)
      state.stampDuty.buyerType = action.payload
      state.stampDuty.value = value
    },
  },
})
