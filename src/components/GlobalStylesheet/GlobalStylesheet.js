import { createGlobalStyle } from 'styled-components'

import '../../../static/reset.css'
import '../../fonts/fonts.css'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  }
`
