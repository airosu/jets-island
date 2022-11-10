/**
 * @jest-environment node
 */

import { roundToNoDecimalPlaces } from './roundToNoDecimalPlaces'

describe('roundToNoDecimalPlaces()', () => {
    it('should return the closest int number, roudned', () => {
        expect(roundToNoDecimalPlaces(14.49)).toBe(14)
        expect(roundToNoDecimalPlaces(14.5)).toBe(15)
        expect(roundToNoDecimalPlaces(-10.23)).toBe(-10)
        expect(roundToNoDecimalPlaces(10.555555555555555)).toBe(11)
    })

    it('should return "0" if the resulting value would be "-0"', () => {
        expect(roundToNoDecimalPlaces(-0.01)).toBe(0)
    })
})
