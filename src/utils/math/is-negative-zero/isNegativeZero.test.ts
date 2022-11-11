/**
 * @jest-environment node
 */

import { isNegativeZero } from './isNegativeZero'

describe('isNegativeZero()', () => {
    it('should return "true" if provided number is negative zero', () => {
        expect(isNegativeZero(-0)).toBe(true)
        expect(isNegativeZero(Math.round(-0.001))).toBe(true)
    })

    it('should return "false" if provided number is not negative zero', () => {
        expect(isNegativeZero(0)).toBe(false)
        expect(isNegativeZero(+0)).toBe(false)
        expect(isNegativeZero(Math.round(0.001))).toBe(false)
        expect(isNegativeZero(-23.000001)).toBe(false)
        expect(isNegativeZero(43_123_123_191)).toBe(false)
        expect(isNegativeZero(NaN)).toBe(false)
    })
})
