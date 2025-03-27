import { UnitType } from "../types/form"
import { UnitTypes } from "../types/state"

export const getUnit = (type: string): UnitType => {
  switch (type) {
    case 'cash':
      return {
        value: '£',
        position: 'prefix'
      }
    case 'percentage':
      return {
        value: '%',
        position: 'postfix'
      }
    default: return {
      value: '£',
      position: 'prefix'
    }
  }
}

export const getValueWithUnit = (value: number, unit: UnitTypes = 'cash') => {
  const unitConfig = getUnit(unit)
  if (unitConfig.position === 'postfix') {
    return `${value} ${unitConfig.value}`
  }

  return `${unitConfig.value} ${value.toLocaleString()}`
}
