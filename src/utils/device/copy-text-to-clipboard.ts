/**
 * Copies provided string to the clipboard.
 *
 * @example
 * copyText('Hello world!')
 */

export const copyTextToClipboard = async (text: string) => await navigator.clipboard.writeText(text)
