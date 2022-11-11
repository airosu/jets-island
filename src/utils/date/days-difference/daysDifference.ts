/**
 * Returns an int number, representing the difference between two provided dates.
 *
 * @example
 * daysDifference(new Date('2022-10-15'), new Date('2022-10-20')) // => 5
 */

export const daysDifference = (date1: Date, date2: Date) => {
    const result = Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

    return isNaN(result) ? null : result
}
