/**
 * Returns the hash substring from a URL, but without the "#" symbol.
 * 
 * @example
    const URL = 'https://placehold.jp/150x150.png#test'
    const cleanHash = getCleanHash(); // "test"
 */

export const getCleanHash = () => {
    const location = window?.location
    const hash = location?.hash

    if (hash !== undefined) {
        return hash.split('#')[1] ?? ''
    }
    return undefined
}
