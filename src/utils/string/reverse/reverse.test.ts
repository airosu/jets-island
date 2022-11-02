/**
 * @jest-environment node
 */

import { reverse } from './reverse'

describe('reverse()', () => {
    it('should change the order of letters from a string from right to left', () => {
        expect(reverse('hello')).toBe('olleh')
    })

    it('should preserve the number of spaces', () => {
        expect(reverse('  1 2     3 ')).toBe(' 3     2 1  ')
    })
})
