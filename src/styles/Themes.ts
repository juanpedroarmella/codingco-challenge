import { createTheme, Theme } from '@mui/material/styles'

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
  textPrimary: string
): Theme {
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
    ...breakpoints
  })
}

const dark = createCustomTheme('#000000', '#E9E6E1')
const light = createCustomTheme('#E9E6E1', '#000000')
const orange = createCustomTheme('#E6511B', '#FFFFFF')
const yellow = createCustomTheme('#E1DF3C', '#000000')

export { dark, light, orange, yellow }
