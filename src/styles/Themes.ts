import { createTheme, Theme } from '@mui/material/styles'
import mediaQuery from 'css-mediaquery'

const defaultColors = {
  background: {
    paper: '#E9E6E1'
  }
}

const breakpoints = {
  breakpoints: {
    values: {
      xs: 540,
      sm: 720,
      md: 960,
      lg: 1320,
      xl: 1440
    }
  }
}

const fonts = {
  typography: { fontFamily: "'Work Sans', sans-serif" }
}

function createCustomTheme (
  backgroundDefault: string,
  textPrimary: string,
  deviceType: string
): Theme {
  const ssrMatchMedia = (
    query: string
  ): {
    matches: boolean
  } => ({
    matches: mediaQuery.match(query, {
      width: deviceType === 'mobile' ? '0px' : '1024px'
    })
  })

  return createTheme({
    ...fonts,
    palette: {
      background: {
        paper: defaultColors.background.paper,
        default: backgroundDefault
      },
      text: {
        primary: textPrimary
      }
    },
    ...breakpoints,
    components: {
      MuiUseMediaQuery: {
        defaultProps: {
          ssrMatchMedia
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '&::placeholder': {
              color: '#707070'
            }
          }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFFFFF'
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: '#FFFFFF'
          }
        }
      }
    }
  })
}

const dark = (deviceType: string): Theme =>
  createCustomTheme('#000000', '#E9E6E1', deviceType)
const light = (deviceType: string): Theme =>
  createCustomTheme('#E9E6E1', '#000000', deviceType)
const orange = (deviceType: string): Theme =>
  createCustomTheme('#E6511B', '#FFFFFF', deviceType)
const yellow = (deviceType: string): Theme =>
  createCustomTheme('#E1DF3C', '#000000', deviceType)

export { dark, light, orange, yellow }
