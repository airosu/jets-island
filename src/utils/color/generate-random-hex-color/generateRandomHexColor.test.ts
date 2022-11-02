/**
 * @jest-environment node
 */

// TODO: fix Cannot find module 'constants/hexadecimal-numeral-system' from 'src/utils/color/generate-random-hex-color.test.ts'
import { HEX_VALUES } from '../../../constants/hexadecimal-numeral-system'
import { generateRandomHexColor } from './generateRandomHexColor'

describe('generateRandomHexColor()', () => {
    it('should generate a random color', () => {
        const randomColor = generateRandomHexColor()
        const [firstCharacter, ...colorHexValues] = randomColor.split('')

        // TODO: add # to character "hash" locales
        expect(firstCharacter).toBe('#')

        colorHexValues.forEach((value) => {
            const intValue = parseInt(value)
            const colorHexValue = isNaN(intValue) ? value : intValue

            expect(HEX_VALUES).toContain(colorHexValue)
        })
    })
})
