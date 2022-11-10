/**
 * @jest-environment node
 */

import { celsiusToFahrenheit } from './celsiusToFahrenheit'

describe('celsiusToFahrenheit()', () => {
    it('should return based on provided decimal point config', () => {
        expect(celsiusToFahrenheit(-17)).toBe(1)
        expect(celsiusToFahrenheit(-17, { decimalPoints: 0 })).toBe(1)
        expect(celsiusToFahrenheit(-17, { decimalPoints: 1 })).toBe(1.4)
        expect(celsiusToFahrenheit(-17, { decimalPoints: 2 })).toBe(1.4)
        expect(celsiusToFahrenheit(-17, { decimalPoints: 'indefinite' })).toBe(1.3999999999999986)
    })

    it('should convert and return any type of value: positive, negative or 0', () => {
        expect(celsiusToFahrenheit(-29)).toBe(-20)
        expect(celsiusToFahrenheit(-17.8)).toBe(0)
        expect(celsiusToFahrenheit(0)).toBe(32)
        expect(celsiusToFahrenheit(21)).toBe(70)
    })

    it('should return "null" if input is NaN', () => {
        expect(celsiusToFahrenheit(NaN)).toBe(null)
    })
})
