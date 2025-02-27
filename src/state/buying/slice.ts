import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BuyingState } from "../../types/state"

const initialState: BuyingState = {
  homeCost: 120000
}

export const BuyingSlice = createSlice({
  name: 'buy',
  initialState,
  reducers: {
    setHomeCost: (
      state: BuyingState,
      action: PayloadAction<number>
    ) => {
      state.homeCost = action.payload
    },
  },
})
