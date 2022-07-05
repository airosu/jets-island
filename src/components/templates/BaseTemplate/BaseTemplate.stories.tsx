import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BaseTemplate } from './BaseTemplate'
import type { BaseTemplateProps } from './BaseTemplate.types'

export default {
    title: 'templates/BaseTemplate',
    component: BaseTemplate,
    argTypes: {},
} as ComponentMeta<typeof BaseTemplate>

const Template: ComponentStory<typeof BaseTemplate> = (args) => <BaseTemplate {...args} />

export const Base = Template.bind({})

Base.args = {} as BaseTemplateProps
