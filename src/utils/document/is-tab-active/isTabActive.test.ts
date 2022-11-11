import { isTabActive } from './isTabActive'

describe('isTabActive()', () => {
    it('also should return "false" if current tab is out of focus', () => {
        Object.defineProperty(global.document, 'hidden', {
            value: true,
            writable: true,
        })
        expect(isTabActive()).toBe(false)
    })

    it('should return "true" current tab is in focus', () => {
        Object.defineProperty(global.document, 'hidden', {
            value: false, // default
            writable: false, // default
        })
        expect(isTabActive()).toBe(true)
    })
})
