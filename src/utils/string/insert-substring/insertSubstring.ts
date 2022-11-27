export const insertSubstring = (string: string, position: string, substring: string) => {
    const exceptions = ['.jpeg', '.png']

    const index = string.indexOf(position)
    const stringBeforeIndex = string.slice(0, index)
    const isException = exceptions.filter((value) => stringBeforeIndex.includes(value)).length > 0

    if (isException) {
        return string
    }

    if (stringBeforeIndex.endsWith('/')) {
        return stringBeforeIndex + 'custom' + substring + string.slice(index)
    }

    return stringBeforeIndex + substring + string.slice(index)
}
