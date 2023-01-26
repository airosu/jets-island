/**
 * @jest-environment node
 */

import { includesSubstring } from './includesSubstring'

describe('includesSubstring()', () => {
    it('should return "true" if substring is present', () => {
        expect(includesSubstring('https://placehold.jp/150x150.png', '150x150')).toBe(true)
    })

    it('should return "false" if substring is not found', () => {
        expect(includesSubstring('https://placehold.jp/150x150.png', 'www')).toBe(false)
    })
})
