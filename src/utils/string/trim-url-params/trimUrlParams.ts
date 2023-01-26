/**
 * Returns a provided url without the url params (removes the "?" and all that comes after).
 *
 * @example
 * trimUrlParams('https://test.jp/32x32?id=1') // => 'https://test.jp/32x32'
 * trimUrlParams('https://www.google.com/') // => 'https://www.google.com/'
 */

export const trimUrlParams = (url: string) => (url.indexOf('?') === -1 ? url : url.slice(0, url.indexOf('?')))
