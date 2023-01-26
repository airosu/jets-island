/**
 * Returns the filename from a provided path.
 *
 * @example
 * getFilename('~/images/icon') // => 'icon'
 * getFilename('index.html') // => 'index.html'
 */

export const getFilename = (path: string) => path.substring(path.lastIndexOf('/') + 1)
