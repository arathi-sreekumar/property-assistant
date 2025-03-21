import { calculateStampDuty } from '../utils/stampDutyCalc'

describe('Stamp Duty Calculator', () => {
  describe('calculates stamp duty for first time buyer', () => {
    it('returns 0 for home cost less than or equal to £300,000', () => {
      expect(calculateStampDuty(125000, 'firstTime')).toBe(0)
      expect(calculateStampDuty(200000, 'firstTime')).toBe(0)
      expect(calculateStampDuty(300000, 'firstTime')).toBe(0)
    })
    it('returns 5% of the home cost for home cost between £300,000 and £500,000', () => {
      expect(calculateStampDuty(400000, 'firstTime')).toBe(5000)
    })
    it('returns stamp duty for home cost greater than £500,000', () => {
      expect(calculateStampDuty(600000, 'firstTime')).toBe(20000)
    })
  })

  describe('calculates stamp duty for single home buyer', () => {
    it('returns 0 for home cost less than or equal to £125,000', () => {
      expect(calculateStampDuty(100000, 'singleHome')).toBe(0)
      expect(calculateStampDuty(125000, 'singleHome')).toBe(0)
    })
    it('returns 2% of the home cost for home cost between £125,000 and £250,000', () => {
      expect(calculateStampDuty(150000, 'singleHome')).toBe(500)
    })
    it('returns 5% of the home cost for home cost between £250,000 and £925,000', () => {
      expect(calculateStampDuty(300000, 'singleHome')).toBe(5000)
      expect(calculateStampDuty(700000, 'singleHome')).toBe(25000)
    })
    it('returns 10% of the home cost for home cost between £925,000 and £1,500,000', () => {
      expect(calculateStampDuty(1000000, 'singleHome')).toBe(43750)
    })
    it('returns 12% of the home cost for home cost greater than £1,500,000', () => {
      expect(calculateStampDuty(2000000, 'singleHome')).toBe(153750)
    })
  })

  describe('calculates stamp duty for second home buyer', () => {
    it('returns 5% stamp duty for home cost less than £125,000', () => {
      expect(calculateStampDuty(30000, 'secondHome')).toBe(1500)
      expect(calculateStampDuty(100000, 'secondHome')).toBe(5000)
    })
    it('returns 7% stamp duty for home cost between £125,000 and £250,000', () => {
      expect(calculateStampDuty(150000, 'secondHome')).toBe(8000)
    })
    it('returns 10% stamp duty for home cost between £250,000 and £925,000', () => {
      expect(calculateStampDuty(300000, 'secondHome')).toBe(20000)
      expect(calculateStampDuty(700000, 'secondHome')).toBe(60000)
    })
    it('returns 15% stamp duty for home cost between £925,000 and £1,500,000', () => {
      expect(calculateStampDuty(1000000, 'secondHome')).toBe(93750)
    })
    it('returns 17% stamp duty for home cost greater than £1,500,000', () => {
      expect(calculateStampDuty(2000000, 'secondHome')).toBe(253750)
    })
  })

  describe('calculates stamp duty for buy to let buyer', () => {
    it('returns 5% stamp duty for home cost less than £125,000', () => {
      expect(calculateStampDuty(30000, 'buyToLet')).toBe(1500)
      expect(calculateStampDuty(100000, 'buyToLet')).toBe(5000)
    })
    it('returns 7% stamp duty for home cost between £125,000 and £250,000', () => {
      expect(calculateStampDuty(150000, 'secondHome')).toBe(8000)
    })
    it('returns 10% stamp duty for home cost between £250,000 and £925,000', () => {
      expect(calculateStampDuty(300000, 'secondHome')).toBe(20000)
      expect(calculateStampDuty(700000, 'secondHome')).toBe(60000)
    })
    it('returns 15% stamp duty for home cost between £925,000 and £1,500,000', () => {
      expect(calculateStampDuty(1000000, 'secondHome')).toBe(93750)
    })
    it('returns 17% stamp duty for home cost greater than £1,500,000', () => {
      expect(calculateStampDuty(2000000, 'secondHome')).toBe(253750)
    })
  })
})