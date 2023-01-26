/**
 * @jest-environment node
 */

import { pickRandomElement } from './pickRandomElement'

const mockArray = [1, 2, 3, 4, 5]

describe('pickRandomElement()', () => {
    it('should pick a single item from an array', () => {
        const randomElement = pickRandomElement(mockArray)

        expect(typeof randomElement).toBe('number')
        expect(mockArray).toContain(randomElement)
    })

    it('should return "undefined" if empty array is provided', () => {
        expect(pickRandomElement([])).toBe(undefined)
    })
})
