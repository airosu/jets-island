import { getSelectedText } from './get-selected-text'

const MOCK_STRING = 'lorem ipsum 123'

describe('getSelectedText()', () => {
    it('should return the correct string if any text is selected', () => {
        jest.spyOn(window, 'getSelection').mockImplementationOnce(
            () =>
                ({
                    ...window.getSelection(),
                    toString: () => MOCK_STRING,
                } as Selection),
        )
        expect(getSelectedText()).toBe(MOCK_STRING)
    })

    it.each(['', null, undefined])('should return empty string if no text is selected: %p', (value) => {
        jest.spyOn(window, 'getSelection').mockImplementationOnce(
            () =>
                ({
                    ...window.getSelection(),
                    toString: () => value,
                } as Selection),
        )
        expect(getSelectedText()).toBe('')
    })
})
