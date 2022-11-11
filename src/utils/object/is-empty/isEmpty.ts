/**
 * Checks if provided object contains any keys.
 *
 * @example
 * isEmpty({}) // => true
 * isEmpty({ id: 1 }) // => false
 */

export const isEmpty = (obj: Record<string | number | symbol, unknown>) =>
    Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
