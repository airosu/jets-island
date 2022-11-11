/**
 * Removes duplicate values from an array of primitives.
 *
 * @example
 * removeDuplicates(['A', 'A', 'B', 'B', 'A', 'C', 'B']) // => ['A', 'B', 'C']
 * removeDuplicates([1, 1, 2, 1, 2, 3, 1]) // => [1, 2, 3]
 */

export const removeDuplicates = <T>(arr: T[]) => [...Array.from(new Set(arr))]
