/**
 * Returns a stirng containing a random hex color.
 *
 * @example
 * generateRandomHexColor() // => #a2ce5b
 */

export const generateRandomHexColor = () =>
    `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, '0')}`

// TODO: add # to character "hash" locales
// TODO: rename this to "get" instead of "generate"? to be consistent with random utils
// TODO: remove this comment
