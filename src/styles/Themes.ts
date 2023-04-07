import { createTheme } from '@mui/material/styles'

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

const darkTheme = createTheme({
  palette: {
    ...defaultColors,
    background: {
      default: '#000000'
    },
    text: {
      primary: '#FFFFFF'
    }
  },
  ...breakpoints
})

const lightTheme = createTheme({
  palette: {
    ...defaultColors,
    background: {
      default: '#FFFFFF'
    },
    text: {
      primary: '#000000'
    }
  },
  ...breakpoints
})

const orangeTheme = createTheme({
  palette: {
    ...defaultColors,
    background: {
      default: '#E6511B'
    },
    text: {
      primary: '#FFFFFF'
    }
  },
  ...breakpoints
})

const yellowTheme = createTheme({
  palette: {
    ...defaultColors,
    background: {
      default: '#E1DF3C'
    },
    text: {
      primary: '#000000'
    }
  },
  ...breakpoints
})

export { darkTheme, lightTheme, orangeTheme, yellowTheme }
