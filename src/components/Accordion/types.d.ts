import type { ComponentProps, ReactNode } from 'react'

type List = {
  title: string
  content: ReactNode
}

export type Props = {
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6
  list: List[]
  defaultOpen?: number
} & ComponentProps<'div'>
