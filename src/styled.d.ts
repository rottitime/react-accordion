// import original module declarations
import 'styled-components'
import { RecordDefaultTheme } from './theme'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends RecordDefaultTheme {}
}
