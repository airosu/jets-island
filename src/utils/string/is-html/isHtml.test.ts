/**
 * @jest-environment node
 */

import { isHtml } from './isHtml'

describe('isHtml()', () => {
    it('should return "false" if input does not contain any html tags', () => {
        expect(isHtml('This is a normal text')).toBe(false)
        expect(isHtml('')).toBe(false)
    })

    it('should return "true" if input contains html tags', () => {
        expect(isHtml('<h1>This is a heading</h1>')).toBe(true)
        expect(isHtml('This is some <span class="bold">bold</span> text')).toBe(true)
    })
})
