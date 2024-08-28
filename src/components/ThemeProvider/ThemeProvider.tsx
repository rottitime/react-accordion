import { ThemeProvider as SCThemeProvider } from 'styled-components'
import defaultTheme from '@/theme'
import type { Props } from './types'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light dark;
  }

  body {
    font-family: ${(p) => p.theme.fontFamily};
    font-size: ${(p) => p.theme.fontSize};
    color: light-dark(${(p) => p.theme.textLight}, ${(p) => p.theme.textDark});
    line-height: 1.75;
  }

  :is(h1, h2, h3, h4, h5, h6) {
    font-weight: ${(p) => p.theme.fontWeightBold};
  }

`

export default function ThemeProvider({
  theme = defaultTheme,
  children,
  ...props
}: Props) {
  return (
    <SCThemeProvider {...props} theme={theme}>
      <GlobalStyle />
      {children}
    </SCThemeProvider>
  )
}
