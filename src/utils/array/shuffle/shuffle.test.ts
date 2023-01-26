/**
 * @jest-environment node
 */

import { shuffle } from './shuffle'

const mockArray = [1, 2, 3, 4, 5]

describe('shuffle()', () => {
    it('should return an array containing the same elements, no matter the order', () => {
        const newArray = shuffle(mockArray)

        expect(typeof newArray).toBe(typeof mockArray)
        expect(newArray.length).toBe(mockArray.length)
        expect(newArray.sort()).toStrictEqual(mockArray)
    })

    it('should return the same array, if input has one or no values', () => {
        expect(shuffle([1])).toStrictEqual([1])
        expect(shuffle([])).toStrictEqual([])
    })
})
