import { ThemeProvider } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import { lightTheme, darkTheme, orangeTheme, yellowTheme } from './Themes'

const themes = [lightTheme, darkTheme, orangeTheme, yellowTheme]

interface ThemeSwitcherProps {
  children: React.ReactNode
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ children }) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0)
  const currentTheme = themes[currentThemeIndex]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentThemeIndex((currentThemeIndex + 1) % themes.length)
    }, 2000)
    return () => clearInterval(intervalId)
  }, [currentThemeIndex])

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}

export default ThemeSwitcher
