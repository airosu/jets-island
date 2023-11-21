import { render } from '@testing-library/react'
import { select } from './select'

const rootIdMock = 'root'
const titleClassMock = 'title-class'
const titleTextMock = 'Hello world!'
const paragraphClassMock = 'paragraph-class'
const paragraphTextMock = 'Lorem ipsum 123'

const MockComponent = () => {
    return (
        <div id={rootIdMock}>
            <h1 className={titleClassMock}>{titleTextMock}</h1>
            <p className={paragraphClassMock}>{paragraphTextMock}</p>
        </div>
    )
}

describe('select()', () => {
    it('should select the correct element from the document', () => {
        render(<MockComponent />)

        const heading = select('h1')
        expect(heading).toHaveTextContent(titleTextMock)

        const paragraph = select('.paragraph-class')
        expect(paragraph).toHaveTextContent(paragraphTextMock)
    })

    it('should select the correct element from a parent container', () => {
        const { container } = render(<MockComponent />)

        const root = container.querySelector('#root')

        const title = select('h1', root)
        expect(title).toBeTruthy()

        const paragraph = select('.paragraph-class')
        expect(paragraph).toBeTruthy()
    })

    it('should return null if element is not found', () => {
        render(<MockComponent />)

        const invalidElement = select('.no-element')
        expect(invalidElement).toBeNull()
    })

    it('should return null if invalid scope is provided', () => {
        const { container } = render(<MockComponent />)

        const invalidScope = container.querySelector('.no-scope')
        const invalidElement = select('.no-element', invalidScope)
        expect(invalidElement).toBeNull()
    })
})
