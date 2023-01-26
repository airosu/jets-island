/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 *
 * @example
 * randomNumber(1, 5) // => 4
 * randomNumber(1, 5) // => 1
 * randomNumber(1, 5) // => 3
 */

export const randomNumber = (min: number, max: number) => {
    const minimum = Math.ceil(min)
    const maximum = Math.floor(max)

    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}
