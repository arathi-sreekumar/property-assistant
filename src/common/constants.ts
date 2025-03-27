//The reason for moving text to this file is for internationalisation

import { PageDisplayInfoListModal } from "../types/layout"

export const LAYOUT = {
  SINGLE_COLUMN: 0,
  TWO_COLUMN: 1,
} as const

export const PAGE_TYPE = {
  HOME: 'Home',
  BUYING_CALCULATOR: 'BuyingCalculator',
} as const

export const PageDisplayInfo: PageDisplayInfoListModal = {
  Home: {
    layoutType: LAYOUT.SINGLE_COLUMN,
  },
  BuyingCalculator: {
    layoutType: window.innerWidth > 980 ? LAYOUT.TWO_COLUMN : LAYOUT.SINGLE_COLUMN,
    header: 'Home Buying Costs Calculator',
  },
}


