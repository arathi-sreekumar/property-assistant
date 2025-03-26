import {
  INITIAL_HOME_COST,
  INITIAL_DEPOSIT,
  INITIAL_CONVEYANCING_FEE,
  INITIAL_SURVEY_FEE,
  INITIAL_TOTAL_COST
} from "../state/buying/constants";
import { BuyingState } from "../types/state";
import { calculateStampDuty } from "../utils/stampDutyCalc";

export const initialState: BuyingState = {
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
  surveyFee: INITIAL_SURVEY_FEE,
  totalCost: INITIAL_TOTAL_COST + calculateStampDuty(INITIAL_HOME_COST, 'firstTime')
}