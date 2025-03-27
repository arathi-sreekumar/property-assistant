import { useAppDispatch, useAppSelector } from "../../../state/hooks"

import { Label } from "../../../components/Form/Label";
import { selectDeposit, selectHomeBuyingCost } from "../../../state/buying/selector";
import { EditableInput, FieldState } from "../../../components/Form/EditableInput";
import { FormRowUI } from "../../../components/Form/form.css";
import { DepositUnits } from "../../../state/buying/constants";
import { setDeposit } from "../../../state/buying/actions";

export const Deposit = () => {
  const dispatch = useAppDispatch()
  const deposit = useAppSelector(selectDeposit)
  const homeCost = useAppSelector(selectHomeBuyingCost)

  const getMax = () => {
    if (deposit.unit === 'cash') {
      return homeCost
    } else {
      return 100
    }
  }

  const getMin = () => {
    if (deposit.unit === 'cash') {
      return (homeCost * .05)
    } else {
      return 5
    }
  }

  const getValueForUnitChange = (fieldValue: FieldState) => {
    switch (fieldValue.unit) {
      case 'cash':
        return (fieldValue.value / 100) * homeCost
      default:
        return (fieldValue.value / homeCost) * 100
    }
  }

  const depositChangeHandler = (fieldValue: FieldState) => {
    dispatch(setDeposit(fieldValue))
  }

  return (
    <FormRowUI>
      <Label htmlFor="deposit">
        Deposit:
      </Label>
      <EditableInput
        type='number'
        max={getMax()}
        min={getMin()}
        value={deposit.value}
        onSave={depositChangeHandler}
        unit={deposit.unit}
        unitOptions={DepositUnits}
        getValueForUnitChange={getValueForUnitChange}
        id="deposit"
      />
    </FormRowUI>
  )
}