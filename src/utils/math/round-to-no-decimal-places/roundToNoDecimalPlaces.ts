import { isNegativeZero } from 'utils/math/is-negative-zero/isNegativeZero'

/**
 * Returns the closest int number.
 *
 * @example
 * roundToNoDecimalPlaces(10.555555555555555) // => 11
 */

export const roundToNoDecimalPlaces = (number: number) => {
    const result = Math.round(number)

    if (isNegativeZero(result)) return 0

    return result
}
