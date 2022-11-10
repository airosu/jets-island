/**
 * @jest-environment node
 */

import { daysDifference } from './daysDifference'

describe('daysDifference()', () => {
    it('should display the correct number of days between two dates', () => {
        expect(daysDifference(new Date('2022-10-15'), new Date('2022-10-15'))).toBe(0)
        expect(daysDifference(new Date('2022-10-15'), new Date('2022-10-16'))).toBe(1)
        expect(daysDifference(new Date('2022-10-15'), new Date('2022-10-20'))).toBe(5)
        expect(daysDifference(new Date('2022-10-15'), new Date('2023-10-15'))).toBe(365)
    })

    it('should return the same value no matter in which order the dates are provided', () => {
        expect(daysDifference(new Date('2022-10-20'), new Date('2022-10-25'))).toBe(5)
        expect(daysDifference(new Date('2022-10-25'), new Date('2022-10-20'))).toBe(5)
    })

    it('should return "null" if at least one of the dates is invalid', () => {
        expect(daysDifference(new Date('2022-10-25'), new Date('2022-10-38'))).toBe(null)
    })
})
