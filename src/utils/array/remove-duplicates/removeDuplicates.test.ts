/**
 * @jest-environment node
 */

import { removeDuplicates } from './removeDuplicates'

const mockArray1 = ['A', 'A', 'B', 'B', 'A', 'C', 'B']
const mockArray2 = [1, 1, 2, 1, 2, 3, 1]
const mockArray3 = ['apple', 10, 'banana', 10, 'apple']

describe('removeDuplicates()', () => {
    it('should remove all duplicate values form an array', () => {
        expect(removeDuplicates(mockArray1)).toStrictEqual(['A', 'B', 'C'])
        expect(removeDuplicates(mockArray2)).toStrictEqual([1, 2, 3])
        expect(removeDuplicates(mockArray3)).toStrictEqual(['apple', 10, 'banana'])
    })
})
