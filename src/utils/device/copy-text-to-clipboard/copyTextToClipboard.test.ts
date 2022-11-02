import { copyTextToClipboard } from './copyTextToClipboard'

const MOCK_TEXT = 'Hello world!'
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

        copyTextToClipboard(MOCK_TEXT)
        expect(mockNavigatorWriteText).toHaveBeenCalledTimes(1)
        expect(mockNavigatorWriteText).toHaveBeenCalledWith(MOCK_TEXT)
    })
})
