/**
 * @jest-environment node
 */

import { removeDuplicates } from './remove-duplicates'

const mockArray = [1, 2, 1, 'A', 1, 'A', 'B', 2]

describe('removeDuplicates()', () => {
    it('should remove all duplicate values form an array', () => {
        expect(removeDuplicates(mockArray)).toStrictEqual([1, 2, 'A', 'B'])
    })
})
