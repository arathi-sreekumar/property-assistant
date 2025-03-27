import { depositType } from "../types/state"

type NewDepositCalcProps = {
  homeCost: number
  deposit: depositType
  newHomeCost: number
}

export const getNewDepositValue = ({
  deposit,
  homeCost,
  newHomeCost
}: NewDepositCalcProps) => {
  switch (deposit.unit) {
    case 'cash':
      const newDeposit = { ...deposit }
      newDeposit.value = (deposit.value / homeCost) * newHomeCost
      return newDeposit
    default: return deposit
  }
}

export const getDepositValue = (deposit: depositType, homeCost: number) => {
  switch (deposit.unit) {
    case 'percentage':
      return (deposit.value * homeCost) / 100
    default: return deposit.value
  }
}
