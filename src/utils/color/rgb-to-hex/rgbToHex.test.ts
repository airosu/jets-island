/**
 * @jest-environment node
 */

import { rgbToHex } from './rgbToHex'

describe('rgbToHex()', () => {
    it('should convert a valid RGB code to hex code', () => {
        expect(rgbToHex(255, 255, 255)).toBe('#ffffff')
        expect(rgbToHex(0, 0, 0)).toBe('#000000')
        expect(rgbToHex(215, 3, 85)).toBe('#d70355')
    })

    it('should return "null" any value is not a valid RGB one', () => {
        expect(rgbToHex(256, 0, 0)).toBe(null)
        expect(rgbToHex(0, -50, 0)).toBe(null)
        expect(rgbToHex(0, 0, NaN)).toBe(null)
    })
})
