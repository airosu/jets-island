/**
 * @jest-environment node
 */

import { randomNumber } from './randomNumber'

describe('randomNumber()', () => {
    it('should return a random number within the given range', () => {
        expect([1, 2]).toContain(randomNumber(1, 2))
        expect(randomNumber(2, 2)).toBe(2)

        expect(randomNumber(1, 5)).toBeGreaterThanOrEqual(1)
        expect(randomNumber(1, 5)).toBeLessThanOrEqual(5)

        expect(randomNumber(-7, 0)).toBeGreaterThanOrEqual(-7)
        expect(randomNumber(-7, 0)).toBeLessThanOrEqual(0)
    })

    it('should round the min number up, and the max number down', () => {
        expect(randomNumber(1.1, 2.9)).toBe(2)
    })
})
