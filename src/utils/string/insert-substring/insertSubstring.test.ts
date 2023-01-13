/**
 * @jest-environment node
 */

import { insertSubstring } from './insertSubstring'

// const mockBaseHost = 'lc-imageresizer-live-s.placeholdcdn.jp/resize'

// const mockUrlWithFileName = `https://${mockBaseHost}/15_ugc?width=720`
// const mockUrlWithFileExtension = `https://${mockBaseHost}/15_ugc.jpeg?width=720`
// const mockUrlWithMultiplePositionTargets = `https://${mockBaseHost}/15_ugc?width=720?x`
// const mockUrlWithoutFileName = `https://${mockBaseHost}/?width=720`
// const mockUrlWithoutCondition = 'https://placehold.jp/150x150?width=150'

// const mockHost = 'lc-imageresizer-live-s.placeholdcdn.jp'
// const mockPath1 = `https://${mockHost}/resize`

const mockString1 =
    'https://lc-imageresizer-live-s.legocdn.com/resize/15_ugc?width=1488&imageUrl=...%2fugc%2f15_ugc.jpg%3fl.r%3d3358?73337'

const mockString2 =
    'https://lc-imageresizer-live-s.legocdn.com/resize/15_ugc.jpeg?width=1488&imageUrl=...%2fugc%2f15_ugc.jpg%3fl.r%3d3358?73337'

const mockString3 =
    'https://lc-imageresizer-live-s.legocdn.com/resize/15_ugc.png?width=1488&imageUrl=...%2fugc%2f15_ugc.jpg%3fl.r%3d3358?73337'

const mockString69 =
    'https://lc-imageresizer-live-s.legocdn.com/resize/?width=720&imageUrl=htt...022%2fdots_mobile.png%3fl.r%3d437336803'

describe('insertSubstring()', () => {
    it('should just work', () => {
        expect(insertSubstring(mockString1, '?', '.png')).toBe(
            'https://lc-imageresizer-live-s.legocdn.com/resize/15_ugc.png?width=1488&imageUrl=...%2fugc%2f15_ugc.jpg%3fl.r%3d3358?73337',
        )
    })

    it('should jsut leave it', () => {
        expect(insertSubstring(mockString2, '?', '.gif')).toBe(
            'https://lc-imageresizer-live-s.legocdn.com/resize/15_ugc.jpeg?width=1488&imageUrl=...%2fugc%2f15_ugc.jpg%3fl.r%3d3358?73337',
        )
        expect(insertSubstring(mockString3, '?', '.gif')).toBe(
            'https://lc-imageresizer-live-s.legocdn.com/resize/15_ugc.png?width=1488&imageUrl=...%2fugc%2f15_ugc.jpg%3fl.r%3d3358?73337',
        )
    })

    it('should also add the full file name, why not', () => {
        expect(insertSubstring(mockString69, '?', '.png')).toBe(
            'https://lc-imageresizer-live-s.legocdn.com/resize/custom.png?width=720&imageUrl=htt...022%2fdots_mobile.png%3fl.r%3d437336803',
        )
    })

    it('should not bother other links', () => {
        const link1 = 'https://www.lego.com/kids/static/LEGO.svg'
        const link2 =
            'https://www.lego.com/r/www/r/portals/-/media/campaigns/kids/dots/2022/august-update/41_stitch_disney_700_aug22.gif?l.r=1660806626'

        expect(insertSubstring(link1, '?', '.png')).toBe(link1)
        expect(insertSubstring(link2, '?', '.png')).toBe(link2)
    })
})
