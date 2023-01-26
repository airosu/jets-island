import { Behavior } from 'utils/string/insert-substring/insertSubstring.constants'
import { doesPathContainFilename } from 'utils/string/insert-substring/insertSubstring.utils'
import { trimUrlParams } from 'utils/string/trim-url-params/trimUrlParams'

// TODO: Delete this
export const insertSubstring = (string: string, position: string, substring: string) => {
    const exceptions = ['.jpeg', '.png']

    const index = string.indexOf(position)
    const stringBeforeIndex = string.slice(0, index)
    const isException = exceptions.filter((value) => stringBeforeIndex.includes(value)).length > 0

    if (stringBeforeIndex.includes('lc-imageresizer-live-s.placeholdcdn.jp/resize')) {
        if (isException) {
            return string
        }

        if (stringBeforeIndex.endsWith('/')) {
            return stringBeforeIndex + 'custom' + substring + string.slice(index)
        }

        return stringBeforeIndex + substring + string.slice(index)
    }

    return string
}

/**
 * Add filename and extension to a path. If the path contains url params, it will add it before the first one (before the "?" symbol).
 *
 * If the path ends with "/", the provided filename will be added after the slash; if not, the following
 * behaviors will be occur:
 *   - *Append*: adds a "/" followed by the filename;
 *   - *Replace*: removes the string after the last "/" and replaces it with the provided filename;
 *   - *Preserve*: keeps the string after the last "/" and only adds the provided filename extension.
 */

export const insertFileNameToPath = (path: string, fileName: string, behavior: Behavior = Behavior.APPEND) => {
    const trimmedPath = trimUrlParams(path)
    const trimmedPathWithoutTrailingSlash = trimmedPath.endsWith('/')
        ? trimmedPath.substring(0, trimmedPath.length - 1)
        : trimmedPath
    const pathWithoutTrailingSlash = path.endsWith('/') ? path.substring(0, path.length - 1) : path

    // TODO: implement logic for "replace" and "preserve" behaviors
    // TODO: consider adding logic for only file extension, without name
    if (behavior === Behavior.REPLACE) {
        return '--WIP--'
    } else if (behavior === Behavior.PRESERVE) {
        return '--WIP--'
    } else {
        if (path.includes('?')) {
            if (doesPathContainFilename(trimmedPathWithoutTrailingSlash)) {
                return `${trimmedPathWithoutTrailingSlash}${path.slice(path.indexOf('?'))}`
            }
            return `${trimmedPathWithoutTrailingSlash}/${fileName}${path.slice(path.indexOf('?'))}`
        } else {
            if (doesPathContainFilename(pathWithoutTrailingSlash)) {
                return pathWithoutTrailingSlash
            }
            return `${pathWithoutTrailingSlash}/${fileName}`
        }
    }
}
