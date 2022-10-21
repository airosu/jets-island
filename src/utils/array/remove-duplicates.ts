/**
 * Remove duplicate values from an array
 *
 * @example
 * removeDuplicates([1, 'apple', 1, 2, 'apple', 1]) // => [1, 'apple', 2]
 */

export const removeDuplicates = <T>(arr: T[]) => [...Array.from(new Set(arr))]
