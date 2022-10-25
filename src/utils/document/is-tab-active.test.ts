import { isTabActive } from './is-tab-active'

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
            value: false,
            writable: false,
        })
        expect(isTabActive()).toBe(true)
    })
})
