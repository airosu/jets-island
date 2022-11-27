export const insertSubstring = (string: string, position: string, substring: string) => {
    const exceptions = ['.jpeg', '.png']

    const index = string.indexOf(position)
    const stringBeforeIndex = string.slice(0, index)
    const result = stringBeforeIndex + substring + string.slice(index)

    const isException = exceptions.filter((value) => stringBeforeIndex.includes(value)).length > 0

    return isException ? string : result
}
