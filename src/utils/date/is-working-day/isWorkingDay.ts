/**
 * Returns true if provided date is working day (monday - friday).
 *
 * @example
 * import { startOfDay } from 'date-fns'
 * isWorkingDay(startOfDay(new Date(2022-10-24)))
 */

export const isWorkingDay = (date: Date) => date.getDay() % 6 !== 0
