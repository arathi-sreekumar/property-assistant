import { useAppDispatch, useAppSelector } from "../../../state/hooks"

import { Label } from "../../../components/Form/Label";
import { selectHomeBuyingCost } from "../../../state/buying/selector";
import { setHomeCost } from "../../../state/buying/actions";
import { EditableInput, FieldState } from "../../../components/Form/EditableInput";
import { FormRowUI } from "../../../components/Form/form.css";

export const HomePrice = () => {
  const dispatch = useAppDispatch()
  const homeCost = useAppSelector(selectHomeBuyingCost)

  const priceChangeHandler = (fieldValue: FieldState) => {
    dispatch(setHomeCost(fieldValue.value as number))
  }

  return (
    <FormRowUI>
      <Label>
        Price of the Home:
      </Label>
      <EditableInput
        type='number'
        value={homeCost}
        onSave={priceChangeHandler}
        unit='cash'
      />
    </FormRowUI>
  )
}