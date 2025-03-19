import { depositType } from "../types/state"

type NewDepositCalcProps = {
  homeCost: string | number
  deposit: depositType
  newHomeCost: string | number
}

export const getNewDepositValue = ({
  deposit,
  homeCost,
  newHomeCost
}: NewDepositCalcProps) => {
  switch (deposit.unit) {
    case 'cash':
      const newDeposit = { ...deposit }
      newDeposit.value = ((deposit.value as number) / (homeCost as number)) * (newHomeCost as number)
      return newDeposit
    default: return deposit
  }
}