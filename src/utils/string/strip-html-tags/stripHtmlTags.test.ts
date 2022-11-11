/**
 * @jest-environment node
 */

import { stripHtmlTags } from './stripHtmlTags'

const mockString = 'Hello world'

describe('stripHtmlTags()', () => {
    it('should remove the html tags', () => {
        expect(stripHtmlTags('')).toBe('')
        expect(stripHtmlTags(`<p>${mockString}</p>`)).toBe(mockString)
        expect(stripHtmlTags(`Printing: <div><p><a href="#">${mockString}</a></p></div>`)).toBe(
            `Printing: ${mockString}`,
        )
        expect(stripHtmlTags(`Text: <span class="bold">${mockString}</span>!`)).toBe(`Text: ${mockString}!`)
    })

    it('should remove the html tags even if input has missing ending tags', () => {
        expect(stripHtmlTags(`<p>${mockString}`)).toBe(mockString)
        expect(stripHtmlTags(`<div><p><a href="#">${mockString}</p>`)).toBe(mockString)
    })

    it('should return the same string if it does not contain html tags', () => {
        expect(stripHtmlTags(mockString)).toBe(mockString)
        expect(stripHtmlTags('')).toBe('')
    })
})
