import { isNegativeZero } from 'utils/math/is-negative-zero/isNegativeZero'

/**
 * Returns the closest float number with 1 decimal point.
 *
 * @example
 * roundToOneDecimalPlace(10.555555555555555) // => 10.6
 */

export const roundToOneDecimalPlace = (number: number) => {
    const result = Math.round(number * 10) / 10

    if (isNegativeZero(result)) return 0

    return result
}
