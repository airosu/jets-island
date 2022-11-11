/**
 * Randomly shuffles all elements in a given array.
 *
 * @example
 * shuffle([1, 2, 3]) // => [2, 3, 1]
 * shuffle([1, 2, 3]) // => [3, 1, 2]
 */

export const shuffle = <T>(array: T[]) => [...array].sort(() => Math.random() - 0.5)
