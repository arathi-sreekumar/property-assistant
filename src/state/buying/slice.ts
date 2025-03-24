import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BuyerTypes, BuyingState, depositType } from "../../types/state"
import { getNewDepositValue } from "../../utils/calculateCosts"
import { calculateStampDuty } from "../../utils/stampDutyCalc"
import { INITIAL_CONVEYANCING_FEE, INITIAL_DEPOSIT, INITIAL_HOME_COST, INITIAL_TOTAL_COST } from "./constants"

const initialState: BuyingState = {
  homeCost: INITIAL_HOME_COST,
  deposit: {
    unit: 'cash',
    value: INITIAL_DEPOSIT
  },
  stampDuty: {
    buyerType: 'firstTime',
    value: calculateStampDuty(INITIAL_HOME_COST, 'firstTime'),
  },
  conveyancingFee: INITIAL_CONVEYANCING_FEE,
  totalCost: INITIAL_TOTAL_COST + calculateStampDuty(INITIAL_HOME_COST, 'firstTime')
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
    setConveyancingFee: (
      state: BuyingState,
      action: PayloadAction<number>
    ) => {
      state.conveyancingFee = action.payload
    },
    setTotalCost: (
      state: BuyingState
    ) => {
      state.totalCost =
        (state.homeCost as number) +
        (state.conveyancingFee as number) +
        (state.stampDuty.value as number)
    }
  },
})
