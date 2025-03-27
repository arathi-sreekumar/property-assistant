import { UnitTypes } from "../../../types/state"
import { getValueWithUnit } from "../../../utils/unitPosition"
import { NonEditableTextUI } from "./NonEditableText.css"

type OwnProps = {
  value: string | number
  unit?: UnitTypes
  classes?: string
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>

export const NonEditableText = ({
  value,
  unit,
  classes = ''
}: Props) => {

  const valueWithUnit = getValueWithUnit(value as string, unit)

  return (
    <NonEditableTextUI className={classes}>
      {valueWithUnit}
    </NonEditableTextUI>
  )
}