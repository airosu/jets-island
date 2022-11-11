/**
 *
 * Strips the HTML tags from a string.
 *
 * @example
 * stripHtmlTags('<p>Hello world!</p>') => 'Hello world!' // => true
 */

export const stripHtmlTags = (string: string) => string.replace(/<\/?[^>]+(>|$)/g, '')
