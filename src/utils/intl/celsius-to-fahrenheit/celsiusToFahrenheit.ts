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
 * Returnes temperature value conversion from celsius to fahrenheit. Number of decimal places can be configured.
 *
 * @example
 * celsiusToFahrenheit(27) // => 81
 * celsiusToFahrenheit(27, { decimalPoints: 1 }) // => 80.6
 */

export const celsiusToFahrenheit = (celsius: number, options?: Options) => {
    if (isNaN(celsius)) return null

    const conversion = (celsius * 9) / 5 + 32
    const final = getDecimalPoints(conversion, options?.decimalPoints)

    if (Object.is(final, -0) || Object.is(final, +0)) return 0

    return final
}
