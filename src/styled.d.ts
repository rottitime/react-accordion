// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundLight: string
    backgroundDark: string
    textLight: string
    textDark: string
    primaryLight: string
    primaryDark: string
    secondaryLight: string
    secondaryDark: string
    accentLight: string
    accentDark: string
    errorLight: string
    errorDark: string
    warningLight: string
    warningDark: string
    infoLight: string
    infoDark: string
    successLight: string
    successDark: string
    fontFamily: string
    fontSize: string
    fontWeightNormal: string
    fontWeightBold: string
    spacingSmall: string
    spacingMedium: string
    spacingLarge: string
    borderRadiusSmall: string
    borderRadiusMedium: string
    borderRadiusLarge: string
  }
}
