/**
 * Returns true if provided number is exactly -0, false if anything else.
 *
 * @example
 * isNegativeZero(Math.round(-0.001)) // true
 * isNegativeZero(+0) // => false
 */

export const isNegativeZero = (number: number) => (Object.is(number, -0) ? true : false)
