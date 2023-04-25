import { useThemeContext } from '@/styles/ThemeProvider'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import { useMemo } from 'react'

interface LineProps {
  theme?: Theme
  withbottom?: string
}

const Line = styled(Box)<LineProps>(({ theme, withbottom }) => {
  const { name: themeName } = useThemeContext()
  const borderColor = useMemo(
    () => (themeName === 'dark' ? '#FFFFFF77' : theme.palette.text.primary),
    [theme.palette.text.primary, themeName]
  )
  return {
    borderTop: `1px solid ${borderColor}`,
    borderBottom: withbottom === 'true' ? `1px solid ${borderColor}` : 'none',
    height: '125px',
    [theme.breakpoints.down('sm')]: {
      height: '75px'
    }
  }
})

export default Line
