/**
 * Returns the hex value of a provided RGB color code.
 *
 * @example
 * rgbToHex(255, 0, 0) // => '#ff0000'
 */

export const rgbToHex = (red: number, green: number, blue: number) => {
    if (red < 0 || red > 255 || isNaN(red)) return null
    if (green < 0 || green > 255 || isNaN(green)) return null
    if (blue < 0 || blue > 255 || isNaN(blue)) return null

    // TODO: add symbol to locales
    return '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
}
