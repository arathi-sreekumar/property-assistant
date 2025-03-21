import { useAppDispatch, useAppSelector } from "../../../state/hooks"

import { Label } from "../../../components/Form/Label";
import { selectStampDuty } from "../../../state/buying/selector";
import { setStampDuty } from "../../../state/buying/actions";
import { FormFieldWrapper, FormRowUI, NonEditableText } from "../../../components/Form/form.css";
import { BuyerTypes } from "../../../types/state";
import { BuyerTypesList } from "../../../state/buying/constants";
import { Select } from "../../../components/Form/Select";
import { getValueWithUnit } from "../../../utils/unitPosition";

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
        selected={option.optionValue === stampDuty.buyerType}
      >
        {option.displayValue}
      </option>
    ))
    return (
      <Select onChange={buyerTypeChangeHandler} width='180px'>
        {options}
      </Select>
    )
  }

  const valueWithUnit = getValueWithUnit('cash', stampDuty.value as string)

  return (
    <FormRowUI>
      <Label>
        StampDuty:
      </Label>
      <FormFieldWrapper>
        <NonEditableText>
          {valueWithUnit}
        </NonEditableText>
      </FormFieldWrapper>
      {showUnitSelection()}
    </FormRowUI>
  )
}