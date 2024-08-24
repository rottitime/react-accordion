import type { Meta, StoryObj } from '@storybook/react'
import Accordion from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: `A accordion component. See https://github.com/rottitime/react-accordion#readme for more details.`
      }
    }
  },
  argTypes: {
    headingLevel: { control: { type: 'number', min: 1, max: 6, step: 1 } }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    headingLevel: 2,
    list: [...Array(3).keys()].map((i) => ({
      title: `Accordion ${i + 1}`,
      content: `Content ${i + 1}`
    }))
  }
}
