import { BuyerTypes } from '../types/state'

const FIRST_TIME_BUYER_FREE_LIMIT = 300000
const FIRT_TIME_BUYER_UPPER_LIMIT = 500000


const getSingleHomeStampDuty = (homeCost: number): number => {
  if (homeCost <= 125000) {
    return 0
  } else if (homeCost <= 250000) {
    return (.02 * (homeCost - 125000))
  } else if (homeCost <= 925000) {
    return (2500 + (.05 * (homeCost - 250000)))
  } else if (homeCost <= 1500000) {
    return (36250 + (.1 * (homeCost - 925000)))
  } else {
    return (93750 + (.12 * (homeCost - 1500000)))
  }
}

const higherRatesStampDuty = (homeCost: number): number => {
  return getSingleHomeStampDuty(homeCost) + (.05 * homeCost)
}

export const calculateStampDuty = (homeCost: number, buyerType: BuyerTypes): number => {
  switch (buyerType) {
    case 'firstTime':
      if (homeCost <= FIRST_TIME_BUYER_FREE_LIMIT) {
        return 0
      } else if (homeCost < FIRT_TIME_BUYER_UPPER_LIMIT) {
        return (.05 * (homeCost - 300000))
      } else {
        // default to single home buyer or 
        // show a notification that you will be considered as a single home buyer
        return getSingleHomeStampDuty(homeCost)
      }
    case 'singleHome':
      return getSingleHomeStampDuty(homeCost)
    case 'secondHome':
      return higherRatesStampDuty(homeCost)
    case 'buyToLet':
      return higherRatesStampDuty(homeCost)
    default: return 0
  }
}