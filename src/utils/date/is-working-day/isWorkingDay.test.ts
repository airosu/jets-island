/**
 * @jest-environment node
 */

import { isWorkingDay } from './isWorkingDay'
import { startOfDay } from 'date-fns'

describe('isWorkingDay()', () => {
    it.each([
        { name: 'monday', date: '2022-10-24' },
        { name: 'tuesday', date: '2022-10-25' },
        { name: 'wednesday', date: '2022-10-26' },
        { name: 'thursday', date: '2022-10-27' },
        { name: 'friday', date: '2022-10-28' },
    ])('should return "true" if provided date is a working day: $name', ({ date }) => {
        expect(isWorkingDay(startOfDay(new Date(date)))).toBe(true)
    })

    it.each([
        { name: 'saturday', date: '2022-10-29' },
        { name: 'sunday', date: '2022-10-30' },
    ])('should return "false" if provided date is a weekend day: $name', ({ date }) => {
        expect(isWorkingDay(startOfDay(new Date(date)))).toBe(false)
    })
})
