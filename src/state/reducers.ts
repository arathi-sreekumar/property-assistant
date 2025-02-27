import { combineReducers } from 'redux'
import { BuyingSlice } from './buying/slice'

const reducers = {
  buy: BuyingSlice.reducer,
}

export const rootReducer = combineReducers(reducers)

export default reducers