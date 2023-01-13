// import { getFileExtension } from 'utils/string/get-file-extension/getFileExtension'

export const insertSubstring = (string: string, position: string, substring: string) => {
    const exceptions = ['.jpeg', '.png']

    const index = string.indexOf(position)
    const stringBeforeIndex = string.slice(0, index)
    const isException = exceptions.filter((value) => stringBeforeIndex.includes(value)).length > 0

    if (stringBeforeIndex.includes('lc-imageresizer-live-s.legocdn.com/resize')) {
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

// TODO: clean this up
type InsertSubstring = {
    url: string
    fileName: string
    fileExtension: string
    condition?: string
    exceptions?: string[]
}

/**
 * Add filename and extension to a path. Will add it before the first url param (before the "?" symbol).
 */

export const insertFileNameToUrl_0 = ({
    url,
    // fileName,
    fileExtension,
    condition,
    exceptions = [],
}: InsertSubstring) => {
    // TODO: Add "?" to locales?
    const index = url.indexOf('?')
    const stringBeforeIndex = url.slice(0, index)
    const isException = exceptions.filter((value) => stringBeforeIndex.includes(value)).length > 0
    const hasCondition = condition !== undefined

    if (hasCondition && stringBeforeIndex.includes(condition)) {
        if (isException) {
            return url
        }

        if (stringBeforeIndex.endsWith('/')) {
            return stringBeforeIndex + 'custom' + fileExtension + url.slice(index)
        }
    }

    return 1
}

export type Options = {
    keepOriginalFilename?: boolean
}

/**
 * Add filename and extension to a path. Will add it before the first url param (before the "?" symbol).
 */

// export const insertFileNameToUrl = (url: string, fileName: string, options?: Options) => {
//     const fileExtension = getFileExtension(fileName)
//     // TODO: Add "?" to locales?
//     const index = url.indexOf('?')
//     const stringBeforeIndex = url.slice(0, index)

//     return 1
// }
