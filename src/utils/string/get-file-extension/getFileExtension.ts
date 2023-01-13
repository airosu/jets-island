/**
 * Returns the extension of a provided filename.
 *
 * @example
 * getFileExtension('index.html') // => '.html'
 * getFileExtension('index') // => undefined
 */

export const getFileExtension = (file: string) => {
    const result = file.match(/\.[0-9a-z]+$/i)

    if (result) {
        return result[0]
    }
    return
}
