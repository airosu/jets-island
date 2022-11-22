type UnknownObject = Partial<Record<string, unknown>>

/**
 * Converts an object with dot notation keys to normal object, with all keys nested.
 *
 * @example
 * type Something = {
 *     navigation: {
 *         cardinalDirections: {
 *             up: string
 *             down: string
 *         }
 *     }
 * }
 *
 * const somethingMapObject = {
 *     'navigation.cardinalDirections.up': 'Up',
 *     'navigation.cardinalDirections.down': 'Down',
 * }
 *
 * const something = convertDotNotationToObject<Something>(somethingMapObject)
 * console.log(something.navigation.cardinalDirections.up)
 */

export const convertDotNotationToObject = <T>(dotNotationMapObject: UnknownObject): T => {
    const result: UnknownObject = {}

    for (const objectPath in dotNotationMapObject) {
        const parts = objectPath.split('.')

        let target = result
        while (parts.length > 1) {
            const part = parts.shift()
            if (part) {
                target = (target[part] as UnknownObject) = (target[part] as UnknownObject) || {}
            }
        }
        target[parts[0]] = dotNotationMapObject[objectPath]
    }

    return result as T
}
