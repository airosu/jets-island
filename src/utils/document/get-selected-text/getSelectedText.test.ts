import { getSelectedText } from './getSelectedText'

const mockString = 'lorem ipsum 123'

describe('getSelectedText()', () => {
    it('should return the correct string if any text is selected', () => {
        jest.spyOn(window, 'getSelection').mockImplementationOnce(
            () =>
                ({
                    ...window.getSelection(),
                    toString: () => mockString,
                } as Selection),
        )
        expect(getSelectedText()).toBe(mockString)
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
