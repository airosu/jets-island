import { render } from '@testing-library/react'
import { BaseTemplate } from './BaseTemplate'

describe('<BaseTemplate />', () => {
    it('should render correctly', () => {
        const { getByText } = render(<BaseTemplate isOk={true} onClick={jest.fn()} />)

        const x = getByText('<BaseTemplate />')
        expect(x).toBeInTheDocument()
    })
})
