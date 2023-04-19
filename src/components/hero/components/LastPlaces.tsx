import { useThemeContext } from '@/styles/ThemeProvider'
import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useMemo } from 'react'

interface HexProps {
  theme?: Theme
  themeName: string
}

const Hex = styled('svg')<HexProps>(({ themeName, theme }) => {
  const strokeColor = useMemo(() => {
    if (themeName === 'dark') {
      return '#E6511B'
    }
    if (themeName === 'light') {
      return '#FF1F57'
    }
    if (themeName === 'yellow') {
      return '#000000'
    }
    if (themeName === 'orange') {
      return '#37A87E'
    }
  }, [themeName])
  return {
    position: 'relative',
    width: '147px',
    height: '170px',
    top: '-135px',
    left: '10px',
    zIndex: 0,
    '& path': {
      fill: theme.palette.background.default,
      stroke: strokeColor
    }
  }
})

interface TextProps {
  theme?: Theme
  themeName: string
}

const Text = styled(Typography)<TextProps>(({ theme, themeName }) => {
  const letterColor = useMemo(() => {
    if (themeName === 'dark') {
      return '#E6511B'
    }
    if (themeName === 'light' || themeName === 'yellow') {
      return '#000000'
    }
    if (themeName === 'orange') {
      return '#FFFFFF'
    }
  }, [themeName])
  return {
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    fontSize: '20px',
    color: letterColor,
    width: '145px',
    textAlign: 'center',
    position: 'relative',
    lineHeight: '23px',
    top: '-21px',
    left: '12px',
    zIndex: 1
  }
})

export default function LastPlaces (): JSX.Element {
  const { name: themeName } = useThemeContext()
  return (
    <Box data-test-id='last-places' maxHeight='125px'>
      <Text themeName={themeName}>Últimos lugares</Text>
      <Hex
        themeName={themeName}
        xmlns='http://www.w3.org/2000/svg'
        width='156.064'
        height='180.206'
        viewBox='0 0 156.064 180.206'
      >
        <path
          d='M127.361,0H42.454L0,73.532l42.454,73.532h84.907l42.454-73.532Z'
          transform='translate(4.5 175.01) rotate(-90)'
          fill='none'
          stroke='#e6511b'
          strokeWidth='9'
        />
      </Hex>
    </Box>
  )
}
