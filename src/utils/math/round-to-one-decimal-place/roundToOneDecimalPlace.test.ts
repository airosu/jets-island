/**
 * @jest-environment node
 */

import { roundToOneDecimalPlace } from './roundToOneDecimalPlace'

describe('roundToOneDecimalPlace()', () => {
    it('should return the closest number with one decimal point, rounded', () => {
        expect(roundToOneDecimalPlace(-0.08)).toBe(-0.1)
        expect(roundToOneDecimalPlace(8.34)).toBe(8.3)
        expect(roundToOneDecimalPlace(8.35)).toBe(8.4)
        expect(roundToOneDecimalPlace(8.43)).toBe(8.4)
        expect(roundToOneDecimalPlace(10.555555555555555)).toBe(10.6)
    })

    it('should return "0" if the resulting value would be "-0"', () => {
        expect(roundToOneDecimalPlace(-0.01)).toBe(0)
    })
})
