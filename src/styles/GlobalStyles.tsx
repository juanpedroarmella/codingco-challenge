import GlobalStyles from '@mui/material/GlobalStyles'
import fonts from './fonts.module.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const GlobalCustomStyle = (): JSX.Element => (
  <GlobalStyles
    styles={{
      fonts,
      body: {
        overflowX: 'hidden',
        margin: 0,
        padding: 0,
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
          width: '0.5em',
          height: '0.5em'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#E1DF3C'
        },
        '&::-webkit-scrollbar-track ': {
          background: '#f0ef9e'
        }
      },
      img: {
        maxWidth: '100%'
      },
      '*': {
        boxSizing: 'border-box'
      },
      a: {
        textDecoration: 'none',
        color: 'inherit'
      }
    }}
  />
)

export default GlobalCustomStyle
