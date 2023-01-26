/**
 * Returs true if provided string contains HTML tags.
 *
 * @example
 * isHtml('This is a normal text') // => false
 * isHtml('This is some <span class="bold">bold</span> text') // => true
 */

export const isHtml = (string: string) => /<\/?[a-z][\s\S]*>/i.test(string)
