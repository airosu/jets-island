/**
 * Picks a random element from an array
 * @example
 * pickRandomElement([1,2,3,4,5]) // => 4
 * pickRandomElement([1,2,3,4,5]) // => 1
 * pickRandomElement([1,2,3,4,5]) // => 3
 */

export const pickRandomElement = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)]
