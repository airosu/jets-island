/**
 * Changes the order of letters from a string from right to left.
 *
 * @example
 * reverse('hello') // => 'olleh'
 */

export const reverse = (str: string) => str.split('').reverse().join('')
