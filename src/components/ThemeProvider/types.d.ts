import type { ComponentProps } from 'react'
import type { ThemeProvider } from 'styled-components'

type ThemeProviderProps = ComponentProps<typeof ThemeProvider>

export type Props = {
  theme?: ThemeProviderProps['theme']
} & Omit<ThemeProviderProps, 'theme'>
