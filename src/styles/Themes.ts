import { createTheme } from '@mui/material/styles'

const defaultColors = {
  background: {
    paper: '#E9E6E1'
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
  }
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
  }
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
  }
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
  }
})

export { darkTheme, lightTheme, orangeTheme, yellowTheme }
