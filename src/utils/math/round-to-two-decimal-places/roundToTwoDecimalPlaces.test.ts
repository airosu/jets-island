/**
 * @jest-environment node
 */

import { roundToTwoDecimalPlaces } from './roundToTwoDecimalPlaces'

describe('roundToTwoDecimalPlaces()', () => {
    it('should return the closest number with two decimal points, rounded', () => {
        expect(roundToTwoDecimalPlaces(-3.448)).toBe(-3.45)
        expect(roundToTwoDecimalPlaces(8.7149)).toBe(8.71)
        expect(roundToTwoDecimalPlaces(8.7187)).toBe(8.72)
        expect(roundToTwoDecimalPlaces(10.555555555555555)).toBe(10.56)
    })

    it('should return "0" if the resulting value would be "-0"', () => {
        expect(roundToTwoDecimalPlaces(-0.001)).toBe(0)
    })
})
