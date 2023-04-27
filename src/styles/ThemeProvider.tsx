import { createContext, useContext, useEffect, useState } from 'react'
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
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentThemeName, setCurrentThemeName] = useState<ThemeNames>(
    ThemeNames.LIGHT
  )

  useEffect(() => {
    const randomIndex = Math.floor(
      Math.random() * Object.keys(ThemeNames).length
    )
    const randomThemeName = Object.values(ThemeNames)[randomIndex] as ThemeNames
    setCurrentThemeName(randomThemeName)
  }, [])

  const currentTheme = themes[currentThemeName]

  return (
    <ThemeContext.Provider value={{ name: currentThemeName }}>
      <MuiThemeProvider theme={currentTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
