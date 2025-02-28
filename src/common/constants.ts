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
    layoutType: LAYOUT.TWO_COLUMN,
    header: 'Property Information',
    imageUrl: '/ThinkingOfHome.jpeg',
    imageDescription: 'A person perusing a home'
  },
  BuyingCalculator: {
    layoutType: LAYOUT.TWO_COLUMN,
    header: 'Home Buying Costs Calculator',
  },
}


