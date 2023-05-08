import { createContext, useContext } from 'react'
import { light, dark, orange, yellow } from './Themes'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

export enum ThemeNames {
  LIGHT = 'light',
  DARK = 'dark',
  ORANGE = 'orange',
  YELLOW = 'yellow'
}

interface ThemeContextProps {
  name: ThemeNames
}

const ThemeContext = createContext<ThemeContextProps>({
  name: ThemeNames.LIGHT
})

export const useThemeContext = (): ThemeContextProps => useContext(ThemeContext)

const themes = {
  [ThemeNames.LIGHT]: light,
  [ThemeNames.DARK]: dark,
  [ThemeNames.ORANGE]: orange,
  [ThemeNames.YELLOW]: yellow
}

interface ThemeProviderProps {
  deviceType: string
  children: React.ReactNode
  theme: ThemeNames
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  deviceType,
  theme
}) => {
  const currentTheme = themes[theme]

  return (
    <ThemeContext.Provider value={{ name: theme }}>
      <MuiThemeProvider theme={currentTheme(deviceType)}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
