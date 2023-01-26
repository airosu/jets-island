/**
 * @jest-environment node
 */

import { Behavior } from 'utils/string/insert-substring/insertSubstring.constants'
import { mockHost, mockPath } from 'utils/string/insert-substring/insertSubstring.mocks'
import { insertFileNameToPath, insertSubstring } from './insertSubstring'

// TODO: cleanup legacy tests and mocks

// const mockBaseHost = 'lc-imageresizer-live-s.placeholdcdn.jp/resize'

// const mockUrlWithFileName = `https://${mockBaseHost}/15_ugc?width=720`
// const mockUrlWithFileExtension = `https://${mockBaseHost}/15_ugc.jpeg?width=720`
// const mockUrlWithMultiplePositionTargets = `https://${mockBaseHost}/15_ugc?width=720?x`
// const mockUrlWithoutFileName = `https://${mockBaseHost}/?width=720`
// const mockUrlWithoutCondition = 'https://placehold.jp/150x150?width=150'

const mockString1 = `https://${mockHost}/resize/15_ugc?width=1488&imageUrl=...%2fugc%2f15_ugc.jpg%3fl.r%3d3358?73337`

const mockString2 = `https://${mockHost}/resize/15_ugc.jpeg?width=1488&imageUrl=...%2fugc%2f15_ugc.jpg%3fl.r%3d3358?73337`

const mockString3 = `https://${mockHost}/resize/15_ugc.png?width=1488&imageUrl=...%2fugc%2f15_ugc.jpg%3fl.r%3d3358?73337`

const mockString69 = `https://${mockHost}/resize/?width=720&imageUrl=htt...022%2fdots_mobile.png%3fl.r%3d437336803`

describe('insertSubstring()', () => {
    it('should just work', () => {
        expect(insertSubstring(mockString1, '?', '.png')).toBe(
            `https://${mockHost}/resize/15_ugc.png?width=1488&imageUrl=...%2fugc%2f15_ugc.jpg%3fl.r%3d3358?73337`,
        )
    })

    it('should jsut leave it', () => {
        expect(insertSubstring(mockString2, '?', '.gif')).toBe(
            `https://${mockHost}/resize/15_ugc.jpeg?width=1488&imageUrl=...%2fugc%2f15_ugc.jpg%3fl.r%3d3358?73337`,
        )
        expect(insertSubstring(mockString3, '?', '.gif')).toBe(
            `https://${mockHost}/resize/15_ugc.png?width=1488&imageUrl=...%2fugc%2f15_ugc.jpg%3fl.r%3d3358?73337`,
        )
    })

    it('should also add the full file name, why not', () => {
        expect(insertSubstring(mockString69, '?', '.png')).toBe(
            `https://${mockHost}/resize/custom.png?width=720&imageUrl=htt...022%2fdots_mobile.png%3fl.r%3d437336803`,
        )
    })

    it('should not bother other links', () => {
        const link1 = 'https://www.lego.com/kids/static/LEGO.svg'
        const link2 = `https://www.lego.com/r/www/r/portals/-/media/campaigns/kids/dots/2022/august-update/41_stitch_disney_700_aug22.gif?l.r=1660806626`

        expect(insertSubstring(link1, '?', '.png')).toBe(link1)
        expect(insertSubstring(link2, '?', '.png')).toBe(link2)
    })
})

describe('insertFileNameToPath()', () => {
    describe('"append" behavior', () => {
        describe('without url params', () => {
            it('should add the filename if path contains trailing slash', () => {
                expect(
                    insertFileNameToPath(
                        mockPath.noExistingFile.trailingSlash.noUrlParams,
                        '1920x1080.jpg',
                        Behavior.APPEND,
                    ),
                ).toBe(`https://${mockHost}/resize/1920x1080.jpg`)
            })

            it('should add slash at the end of the path (if one is not present) and insert the filename after it', () => {
                expect(
                    insertFileNameToPath(
                        mockPath.noExistingFile.noTrailingSlash.noUrlParams,
                        '1920x1080.jpg',
                        Behavior.APPEND,
                    ),
                ).toBe(`https://${mockHost}/resize/1920x1080.jpg`)
            })

            it('should return the same path, if it already contains both file name and extension', () => {
                expect(
                    insertFileNameToPath(
                        mockPath.existingFile.noTrailingSlash.noUrlParams,
                        '1920x1080.jpg',
                        Behavior.APPEND,
                    ),
                ).toBe(`https://${mockHost}/resize/15_ugc.png`)
            })

            it('should cleanup trailing slashes, if path already contains file name and extension', () => {
                expect(
                    insertFileNameToPath(
                        mockPath.existingFile.trailingSlash.noUrlParams,
                        '1920x1080.jpg',
                        Behavior.APPEND,
                    ),
                ).toBe(`https://${mockHost}/resize/15_ugc.png`)
            })
        })

        describe('with url params', () => {
            it('should insert the filename before url params, to a path containing trailing slash', () => {
                expect(
                    insertFileNameToPath(
                        mockPath.noExistingFile.trailingSlash.urlParams,
                        '150x150.png',
                        Behavior.APPEND,
                    ),
                ).toBe(`https://${mockHost}/resize/150x150.png?width=720&imageUrl=htts//1...022%2f_mobile.png%3fl.r%3d`)
            })

            it('should insert slash and the filename before url params, to a path that does not contain trailing slash', () => {
                expect(
                    insertFileNameToPath(
                        mockPath.noExistingFile.noTrailingSlash.urlParams,
                        '150x150.png',
                        Behavior.APPEND,
                    ),
                ).toBe(`https://${mockHost}/resize/150x150.png?width=720&imageUrl=htts//1...022%2f_mobile.png%3fl.r%3d`)
            })

            it('should return the same path, if it already contains file name and extension', () => {
                expect(
                    insertFileNameToPath(
                        mockPath.existingFile.noTrailingSlash.urlParams,
                        '1920x1080.jpg',
                        Behavior.APPEND,
                    ),
                ).toBe(`https://${mockHost}/resize/15_ugc.png?width=720&height=480`)
            })

            it('should cleanup trailing slashes, if path already contains file name and extension', () => {
                expect(
                    insertFileNameToPath(
                        mockPath.existingFile.trailingSlash.urlParams,
                        '1920x1080.jpg',
                        Behavior.APPEND,
                    ),
                ).toBe(`https://${mockHost}/resize/15_ugc.png?width=720&height=480`)
            })
        })
    })

    it('should have "append" set as default behavior', () => {
        expect(insertFileNameToPath('c:/users/red/images/', 'image1.png')).toBe('c:/users/red/images/image1.png')
        expect(insertFileNameToPath('c:/users/red/images', 'image1.png')).toBe('c:/users/red/images/image1.png')
    })
})
