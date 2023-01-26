/**
 * Returns "true" if a string contains the provided substring.
 *
 * @example
 * includesSubstring('https://placehold.jp/150x150.png', '150x150') // => true
 * includesSubstring('https://placehold.jp/150x150.png', 'www') // => false
 */

export const includesSubstring = (string: string, substring: string) => {
    if (string.includes(substring)) {
        return true
    }
    return false
}
