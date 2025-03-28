import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../state/hooks"

import { FormFieldWrapper, FormRowUI } from "../../../components/Form/form.css"
import { Label } from "../../../components/Form/Label"
import { NonEditableText } from "../../../components/Form/NonEditableText";
import {
  selectHomeBuyingCost,
  selectConveyancingFee,
  selectStampDuty,
  selectTotalCost,
  selectSurveyFee,
  selectValuationFee,
} from "../../../state/buying/selector";
import { setTotalCost } from "../../../state/buying/actions";

export const TotalCost = () => {
  const dispatch = useAppDispatch()

  const totalCost = useAppSelector(selectTotalCost)
  const homeCost = useAppSelector(selectHomeBuyingCost)
  const stampDuty = useAppSelector(selectStampDuty)
  const conveyancingFee = useAppSelector(selectConveyancingFee)
  const surveyFee = useAppSelector(selectSurveyFee)
  const valuationFee = useAppSelector(selectValuationFee)

  useEffect(() => {
    dispatch(setTotalCost())
  }, [
    conveyancingFee,
    homeCost,
    stampDuty,
    surveyFee,
    valuationFee,
  ])

  return (
    <FormRowUI>
      <Label>Total cost to buy:</Label>
      <FormFieldWrapper>
        <NonEditableText classes="total" value={totalCost} />
      </FormFieldWrapper>
    </FormRowUI>
  )
}
