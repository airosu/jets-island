/**
 * Returns true if provided date is working day (monday - friday).
 *
 * @example
 * isWorkingDay
 */

export const isWorkingDay = (date: Date) => date.getDay() % 6 !== 0
