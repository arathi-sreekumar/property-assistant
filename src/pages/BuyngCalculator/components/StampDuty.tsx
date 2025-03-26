import { useAppDispatch, useAppSelector } from "../../../state/hooks"

import { Label } from "../../../components/Form/Label";
import { selectStampDuty } from "../../../state/buying/selector";
import { setStampDuty } from "../../../state/buying/actions";
import { FormFieldWrapper, FormRowUI } from "../../../components/Form/form.css";
import { BuyerTypes } from "../../../types/state";
import { BuyerTypesList } from "../../../state/buying/constants";
import { Select } from "../../../components/Form/Select";
import { StampDutyInfo } from "./StampDutyInfo";
import { NonEditableText } from "../../../components/Form/NonEditableText";

export const StampDuty = () => {
  const dispatch = useAppDispatch()
  const stampDuty = useAppSelector(selectStampDuty)

  const buyerTypeChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newBuyerType = event.target.value as BuyerTypes
    dispatch(setStampDuty(newBuyerType))
  }

  const showUnitSelection = () => {
    const options = BuyerTypesList.map(option => (
      <option
        value={option.optionValue}
        key={`option-${option.optionValue}`}
      >
        {option.displayValue}
      </option>
    ))
    return (
      <Select
        onChange={buyerTypeChangeHandler}
        width='180px'
        value={stampDuty.buyerType}
        name="buyerType"
        aria-label="buyerType"
      >
        {options}
      </Select>
    )
  }

  return (
    <FormRowUI>
      <Label>
        Stamp Duty:
      </Label>
      <FormFieldWrapper>
        <NonEditableText value={stampDuty.value} />
      </FormFieldWrapper>
      {showUnitSelection()}
      <StampDutyInfo />
    </FormRowUI>
  )
}