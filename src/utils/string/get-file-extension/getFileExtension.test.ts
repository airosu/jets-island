/**
 * @jest-environment node
 */

import { getFileExtension } from './getFileExtension'

describe('getFileExtension()', () => {
    it('should return the file extension when one is present', () => {
        expect(getFileExtension('index.html')).toBe('.html')
        expect(getFileExtension('https://placehold.jp/150x150.png')).toBe('.png')
    })

    it('should return the extension if no filename is provided', () => {
        expect(getFileExtension('.html')).toBe('.html')
        expect(getFileExtension(`   .html`)).toBe('.html')
    })

    it('should return the last file extenstion if multiple are present', () => {
        expect(getFileExtension('image.jpeg.svg.png')).toBe('.png')
        expect(getFileExtension('image1.jpeg image2.png')).toBe('.png')
        expect(getFileExtension('image1.jpeg, image2.png')).toBe('.png')
    })

    it('should return "undefined" if no extension is found', () => {
        expect(getFileExtension('index')).toBe(undefined)
        expect(getFileExtension('')).toBe(undefined)
    })

    it('should return "undefined" if other characters are present after the extension', () => {
        expect(getFileExtension('index.html   ')).toBe(undefined)
        expect(getFileExtension('index.html, other-file')).toBe(undefined)
    })
})
