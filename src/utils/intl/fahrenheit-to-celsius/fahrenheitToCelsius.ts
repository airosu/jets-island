import { roundToNoDecimalPlaces } from 'utils/math/round-to-no-decimal-places/roundToNoDecimalPlaces'
import { roundToOneDecimalPlace } from 'utils/math/round-to-one-decimal-place/roundToOneDecimalPlace'
import { roundToTwoDecimalPlaces } from 'utils/math/round-to-two-decimal-places/roundToTwoDecimalPlaces'

type Options = {
    decimalPoints: 0 | 1 | 2 | 'indefinite'
}

const getDecimalPoints = (n: number, config?: Options['decimalPoints']) => {
    switch (config) {
        case 'indefinite':
            return n
        case 0:
            return roundToNoDecimalPlaces(n)
        case 1:
            return roundToOneDecimalPlace(n)
        case 2:
            return roundToTwoDecimalPlaces(n)
        default:
            return roundToNoDecimalPlaces(n)
    }
}

/**
 * Returnes temperature value conversion from fahrenheit to celsius. Number of decimal places can be configured.
 *
 * @example
 * fahrenheitToCelsius(51) // => 11
 * fahrenheitToCelsius(51, { decimalPoints: 2 }) // => 10.56
 */

export const fahrenheitToCelsius = (fahrenheit: number, options?: Options) => {
    if (isNaN(fahrenheit)) return null

    const conversion = ((fahrenheit - 32) * 5) / 9
    const final = getDecimalPoints(conversion, options?.decimalPoints)

    if (Object.is(final, -0) || Object.is(final, +0)) return 0

    return final
}
