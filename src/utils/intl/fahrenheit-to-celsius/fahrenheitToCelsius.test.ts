/**
 * @jest-environment node
 */

import { fahrenheitToCelsius } from './fahrenheitToCelsius'

describe('fahrenheitToCelsius()', () => {
    it('should return based on provided decimal point config', () => {
        expect(fahrenheitToCelsius(51)).toBe(11)
        expect(fahrenheitToCelsius(51, { decimalPoints: 0 })).toBe(11)
        expect(fahrenheitToCelsius(51, { decimalPoints: 1 })).toBe(10.6)
        expect(fahrenheitToCelsius(51, { decimalPoints: 2 })).toBe(10.56)
        expect(fahrenheitToCelsius(51, { decimalPoints: 'indefinite' })).toBe(10.555555555555555)
    })

    it('should convert and return any type of value: positive, negative or 0', () => {
        expect(fahrenheitToCelsius(-3)).toBe(-19)
        expect(fahrenheitToCelsius(0)).toBe(-18)
        expect(fahrenheitToCelsius(32)).toBe(0)
        expect(fahrenheitToCelsius(50)).toBe(10)
    })

    it('should return "null" if input is NaN', () => {
        expect(fahrenheitToCelsius(NaN)).toBe(null)
    })
})
