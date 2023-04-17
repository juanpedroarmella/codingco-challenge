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
      lg: 1440,
      xl: 1320
    }
  }
}

const fonts = {
  typography: { fontFamily: "'Work Sans', sans-serif" }
}

function createCustomTheme(
  backgroundDefault: string,
  textPrimary: string
): Theme {
  return createTheme({
    ...fonts,
    palette: {
      ...defaultColors,
      background: {
        default: backgroundDefault
      },
      text: {
        primary: textPrimary
      }
    },
    ...breakpoints
  })
}

const darkTheme = createCustomTheme('#000000', '#E9E6E1')
const lightTheme = createCustomTheme('#E9E6E1', '#000000')
const orangeTheme = createCustomTheme('#E6511B', '#FFFFFF')
const yellowTheme = createCustomTheme('#E1DF3C', '#000000')

export { darkTheme, lightTheme, orangeTheme, yellowTheme }
