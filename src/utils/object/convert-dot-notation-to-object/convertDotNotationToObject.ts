type UnknownObject = Partial<Record<string, unknown>>

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
