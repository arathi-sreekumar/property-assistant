import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BuyerTypes, BuyingState, depositType } from "../../types/state"
import { getDepositValue, getNewDepositValue } from "../../utils/calculateCosts"
import { calculateStampDuty } from "../../utils/stampDutyCalc"
import {
  INITIAL_CONVEYANCING_FEE,
  INITIAL_DEPOSIT,
  INITIAL_HOME_COST,
  INITIAL_OWN_COST,
  INITIAL_SURVEY_FEE,
  INITIAL_TOTAL_COST,
  INITIAL_VALUATION_FEE
} from "./constants"

const INITIAL_STAMPDUTY = calculateStampDuty(INITIAL_HOME_COST, 'firstTime')

const initialState: BuyingState = {
  homeCost: INITIAL_HOME_COST,
  deposit: {
    unit: 'cash',
    value: INITIAL_DEPOSIT
  },
  stampDuty: {
    buyerType: 'firstTime',
    value: INITIAL_STAMPDUTY,
  },
  conveyancingFee: INITIAL_CONVEYANCING_FEE,
  surveyFee: INITIAL_SURVEY_FEE,
  valuationFee: INITIAL_VALUATION_FEE,
  totalCost: INITIAL_TOTAL_COST + INITIAL_STAMPDUTY,
  yourCost: INITIAL_OWN_COST + INITIAL_STAMPDUTY,
}

export const BuyingSlice = createSlice({
  name: 'buy',
  initialState: { ...initialState },
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
    setSurveyFee: (
      state: BuyingState,
      action: PayloadAction<number>
    ) => {
      state.surveyFee = action.payload
    },
    setValuationFee: (
      state: BuyingState,
      action: PayloadAction<number>
    ) => {
      state.valuationFee = action.payload
    },
    setTotalCost: (
      state: BuyingState
    ) => {
      state.totalCost =
        state.homeCost +
        state.conveyancingFee +
        state.stampDuty.value +
        state.surveyFee +
        state.valuationFee
    },
    setYourCost: (
      state: BuyingState
    ) => {
      const deposit = getDepositValue(state.deposit, state.homeCost)
      state.yourCost =
        deposit +
        state.conveyancingFee +
        state.stampDuty.value +
        state.surveyFee +
        state.valuationFee
    },
    reset: () => initialState,
  },
})
