import { copyTextToClipboard } from './copyTextToClipboard'

const mockText = 'Hello world!'
const mockNavigatorWriteText = jest.fn()

describe('copyTextToClipboard()', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should write the provided text to the navigator clipboard', () => {
        Object.assign(navigator, {
            clipboard: {
                writeText: mockNavigatorWriteText,
            },
        })

        expect(mockNavigatorWriteText).toHaveBeenCalledTimes(0)

        copyTextToClipboard(mockText)
        expect(mockNavigatorWriteText).toHaveBeenCalledTimes(1)
        expect(mockNavigatorWriteText).toHaveBeenCalledWith(mockText)
    })
})
