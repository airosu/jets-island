/**
 * @jest-environment node
 */

import { average } from './average'

describe('average()', () => {
    it('should return the average of all numbers form an array', () => {
        expect(average([0, 10])).toBe(5)
        expect(average([-10, 10])).toBe(0)
        expect(average([4, 8, 12])).toBe(8)
        expect(average([87, 21, 3, 0])).toBe(27.75)
        expect(average([12.456, 12])).toBe(12.228)
        expect(average([-14.8, 891.505, -0.003, 7])).toBe(220.9255)
    })

    it('should return "null" if array has no values', () => {
        expect(average([])).toBe(null)
    })
})
