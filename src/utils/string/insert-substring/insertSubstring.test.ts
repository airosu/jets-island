/**
 * @jest-environment node
 */

import { insertSubstring } from './insertSubstring'

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
})
