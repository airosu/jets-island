/** @jsxRuntime classic */
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'
import type { FC } from 'react'
import styled from '@emotion/styled'

export type TestComponentProps = {}

const color = 'white'

export const StyledCeva = styled.div`
    color: 'pink';
`

// TODO: delete this component once emotion and material ui setup is done
export const TestComponent: FC<TestComponentProps> = () => {
    return (
        <div
            css={css`
                padding: 32px;
                background-color: hotpink;
                font-size: 24px;
                border-radius: 4px;
                &:hover {
                    color: ${color};
                }
            `}
        >
            Hover to change color.
        </div>
    )
}

export default TestComponent
