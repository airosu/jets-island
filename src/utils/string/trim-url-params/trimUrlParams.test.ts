/**
 * @jest-environment node
 */

import { trimUrlParams } from './trimUrlParams'

const mockUrl = 'https://placehold.jp/150x150.png'

describe('trimUrlParams()', () => {
    it('should remove everything after the first "?" character', () => {
        expect(trimUrlParams(`${mockUrl}?text=hello+world&id=r%3d3358??7333?7`)).toBe(mockUrl)
    })

    it('should return the same string if no url params are present', () => {
        expect(trimUrlParams(mockUrl)).toBe(mockUrl)
        expect(trimUrlParams('')).toBe('')
    })
})
