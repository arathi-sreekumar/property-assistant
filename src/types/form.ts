export type ButtonStyles = 'primary' | 'outlined' | 'cancel' //add clear, danger?

export type unitPosition = 'prefix' | 'postfix'

export type UnitType = {
  value: string
  position: unitPosition
}

export type SelectOptionType = {
  optionValue: string
  displayValue: string
}