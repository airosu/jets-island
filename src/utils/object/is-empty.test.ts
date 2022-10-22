/**
 * @jest-environment node
 */

import { isEmpty } from './is-empty'

describe('isEmpty()', () => {
    it('should return "true" if input object has no keys', () => {
        expect(isEmpty({})).toBe(true)
    })

    it('should return "false" if input object has at least one key', () => {
        expect(isEmpty({ id: 1 })).toBe(false)
    })
})
