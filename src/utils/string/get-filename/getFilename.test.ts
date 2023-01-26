/**
 * @jest-environment node
 */

import { getFilename } from './getFilename'

describe('getFilename()', () => {
    it('should return the substring after the last "/" character', () => {
        expect(getFilename('~/images/icon.png')).toBe('icon.png')
        expect(getFilename('~/images/icon')).toBe('icon')
    })

    it('should return the full string if no "/" is found within', () => {
        expect(getFilename('index.html')).toBe('index.html')
        expect(getFilename('')).toBe('')
    })
})
