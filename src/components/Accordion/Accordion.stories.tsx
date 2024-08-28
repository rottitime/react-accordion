import type { Meta, StoryObj } from '@storybook/react'
import Accordion from './Accordion'
import type { Props } from './types'

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
      content: `${i + 1}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vero voluptates recusandae corporis aut animi aliquid ipsa vel ad laborum quam est numquam magni voluptatum quaerat velit saepe asperiores, ab dicta perspiciatis. Maxime, ab dolore ducimus inventore asperiores ea cumque expedita facilis recusandae! Voluptas dolores perferendis quos a beatae quod, dignissimos ex porro quas cum quam amet. Quod laudantium dicta natus nulla at saepe esse reprehenderit, accusantium atque, excepturi ea ipsam repellat provident corrupti itaque. Sequi commodi ad blanditiis modi consequatur ipsam possimus ducimus dignissimos voluptas voluptates incidunt quisquam numquam quis reprehenderit, ipsa voluptatibus corrupti tempora iure velit non nam deleniti odit mollitia laudantium? Iusto deleniti excepturi atque, ex provident consectetur est omnis ullam ipsam perspiciatis nobis aperiam nihil? Dolorum rerum aliquid in, molestias non nostrum beatae blanditiis modi aperiam voluptatem a cumque magni saepe perferendis iste velit similique doloribus cupiditate nulla unde! Quis temporibus eum mollitia repudiandae molestiae, dolor natus? Eligendi pariatur quis rerum rem provident sed, itaque esse eveniet sapiente labore, quibusdam et dolorum voluptates saepe aliquam unde neque quod officia iste nobis voluptate consequatur quasi culpa! Voluptatem suscipit exercitationem quisquam eos libero, laborum harum consectetur, ab quas molestiae officia repudiandae deserunt. Eaque optio minima saepe similique explicabo.`
    }))
  } satisfies Props
}
