import { FC } from 'react'
import type { BaseTemplateProps } from './BaseTemplate.types'

export const BaseTemplate: FC<BaseTemplateProps> = ({ isOk, onClick }) => {
    return (
        <>
            <div data-testid="main-text">{`<BaseTemplate />`}</div>
            {isOk && <p>OK</p>}
            <button onClick={onClick}>Click me!</button>
        </>
    )
}

export default BaseTemplate
