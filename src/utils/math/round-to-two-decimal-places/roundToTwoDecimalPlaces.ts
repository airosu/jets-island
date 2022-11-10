import { isNegativeZero } from 'utils/math/is-negative-zero/isNegativeZero'

/**
 * Returns the closest float number with 2 decimal points.
 *
 * @example
 * roundToTwoDecimalPlaces(10.555555555555555) // => 10.56
 */

export const roundToTwoDecimalPlaces = (number: number) => {
    const result = Math.round(number * 100) / 100

    if (isNegativeZero(result)) return 0

    return result
}
