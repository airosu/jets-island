import { render } from '@testing-library/react'
import { isElementInFocus } from './isElementInFocus'
import userEvent from '@testing-library/user-event'

const BUTTON_LABEL = 'Click me!'

const MockComponent = () => {
    return (
        <div>
            <button>{BUTTON_LABEL}</button>
        </div>
    )
}

describe('isElementInFocus()', () => {
    it('should return "false" if element is not in focus', () => {
        const { getByRole } = render(<MockComponent />)
        const button = getByRole('button', { name: BUTTON_LABEL })

        expect(isElementInFocus(button)).toBe(false)
    })

    it('should return "true" if element not in focus', async () => {
        const { getByRole } = render(<MockComponent />)
        const button = getByRole('button', { name: BUTTON_LABEL })

        await userEvent.click(button)

        expect(isElementInFocus(button)).toBe(true)
    })
})
