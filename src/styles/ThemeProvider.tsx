import { ThemeProvider } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import { lightTheme, darkTheme, orangeTheme, yellowTheme } from './Themes'

const themes = [lightTheme, darkTheme, orangeTheme, yellowTheme]

interface ThemeSwitcherProps {
  children: React.ReactNode
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ children }) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * themes.length)
    setCurrentThemeIndex(randomIndex)
  }, [])

  const currentTheme = themes[currentThemeIndex]

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}

export default ThemeSwitcher
