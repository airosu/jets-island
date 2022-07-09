import { TestComponent } from 'components/shared/TestComponent/TestComponent'

export type indexProps = {}

// TODO: Remove this page once emotion and material ui setup is completed
export const index: React.FC<indexProps> = () => {
    return (
        <div>
            <TestComponent />
        </div>
    )
}

export default index
