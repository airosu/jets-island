// TODO: explore what was added similar to (a, b) => a + b in other project
// TODO: add the other utils from the other project

/**
 * Returns the average of all numbers from a provided array.
 *
 * @example
 * average([1,9,18,36]) // => 16
 */

export const average = (numbers: number[]) => {
    if (numbers.length) {
        const result = numbers.reduce((a, b) => a + b) / numbers.length

        return result
    }
    return null
}
