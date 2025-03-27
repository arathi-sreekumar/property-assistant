import { getUnit, getValueWithUnit } from './unitPosition'

describe('getUnit', () => {
  it('returns the right unit type for cash', () => {
    expect(getUnit('cash')).toEqual({ value: '£', position: 'prefix' })
  })

  it('returns the right unit type for percentage', () => {
    expect(getUnit('percentage')).toEqual({ value: '%', position: 'postfix' })
  })

  it('returns the cash unit type for default', () => {
    expect(getUnit('')).toEqual({ value: '£', position: 'prefix' })
  })
})

describe('getValueWithUnit', () => {
  it('returns £ 200 for unit cash and value 200', () => {
    expect(getValueWithUnit('100', 'cash')).toEqual('£ 100')
  })

  it('returns 10 % for unit percentage and value 10', () => {
    expect(getValueWithUnit('10', 'percentage')).toEqual('10 %')
  })

  it('returns £ 10 for value 10 and no units provided', () => {
    expect(getValueWithUnit('10')).toEqual('£ 10')
  })
})