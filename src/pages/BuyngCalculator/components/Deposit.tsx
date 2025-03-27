import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { Label } from "../../../components/Form/Label";
import { selectDeposit, selectHomeBuyingCost } from "../../../state/buying/selector";
import { EditableInput, FieldState } from "../../../components/Form/EditableInput";
import { ErrorUI, FormRowUI } from "../../../components/Form/form.css";
import { DepositUnits } from "../../../state/buying/constants";
import { setDeposit } from "../../../state/buying/actions";
import { getValueWithUnit } from "../../../utils/unitPosition";
import { UnitTypes } from "../../../types/state";

const getMax = (unit: UnitTypes, homeCost: number) => {
  if (unit === 'cash') {
    return homeCost
  } else {
    return 100
  }
}

const getMin = (unit: UnitTypes, homeCost: number) => {
  if (unit === 'cash') {
    return (homeCost * .05)
  } else {
    return 5
  }
}

export const Deposit = () => {
  const dispatch = useAppDispatch()
  const deposit = useAppSelector(selectDeposit)
  const homeCost = useAppSelector(selectHomeBuyingCost)
  const [error, setError] = useState('')

  const getValueForUnitChange = (fieldValue: FieldState) => {
    switch (fieldValue.unit) {
      case 'cash':
        return (fieldValue.value / 100) * homeCost
      default:
        return (fieldValue.value / homeCost) * 100
    }
  }

  const validateDeposit = (fieldValue: FieldState) => {
    const minValue = getMin(fieldValue.unit, homeCost)
    const maxValue = getMax(fieldValue.unit, homeCost)

    if (fieldValue.value < minValue) {
      setError(`Deposit cannot be less than ${getValueWithUnit(minValue, fieldValue.unit)}`)
      return false
    } else if (fieldValue.value > maxValue) {
      setError(`Deposit cannot be greater than ${getValueWithUnit(maxValue, fieldValue.unit)}`)
      return false
    }

    setError('')
    return true
  }

  const depositChangeHandler = (fieldValue: FieldState) => {
    const isValid = validateDeposit(fieldValue)
    if (isValid) {
      dispatch(setDeposit(fieldValue))
    }
  }

  return (
    <>
      <FormRowUI>
        <Label htmlFor="deposit">
          Deposit:
        </Label>
        <EditableInput
          type='number'
          value={deposit.value}
          onSave={depositChangeHandler}
          unit={deposit.unit}
          unitOptions={DepositUnits}
          getValueForUnitChange={getValueForUnitChange}
          id="deposit"
        />
      </FormRowUI>
      {error && (<ErrorUI>{error}</ErrorUI>)}
    </>
  )
}