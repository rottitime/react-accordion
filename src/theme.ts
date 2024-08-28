const theme = {
  backgroundLight: '#FFFFFF',
  backgroundDark: '#121212',
  textLight: '#333333',
  textDark: '#E0E0E0',
  primaryLight: '#007BFF',
  primaryDark: '#BB86FC',
  secondaryLight: '#6C757D',
  secondaryDark: '#03DAC6',
  accentLight: '#28A745',
  accentDark: '#CF6679',
  errorLight: '#DC3545',
  errorDark: '#CF6679',
  warningLight: '#FFC107',
  warningDark: '#FFB74D',
  infoLight: '#17A2B8',
  infoDark: '#03A9F4',
  successLight: '#28A745',
  successDark: '#81C784',
  fontFamily: "'Helvetica Neue', Arial, sans-serif",
  fontSize: '16px',
  fontWeightNormal: '400',
  fontWeightBold: '700',
  spacingSmall: '8px',
  spacingMedium: '16px',
  spacingLarge: '24px',
  borderRadiusSmall: '4px',
  borderRadiusMedium: '8px',
  borderRadiusLarge: '12px'
} as const

export default theme

type ValuesType = keyof typeof theme

export type RecordDefaultTheme = Record<ValuesType, string>
