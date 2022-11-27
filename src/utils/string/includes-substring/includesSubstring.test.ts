/**
 * @jest-environment node
 */

import { includesSubstring } from './includesSubstring'

describe('includesSubstring()', () => {
    it('should return "true" if substring is present', () => {
        const URL_DOTS = 'https://www.lego.com/en-us/kids/campaigns/dots'
        expect(includesSubstring(URL_DOTS, '/kids/campaigns/dots')).toBe(true)
    })
})
