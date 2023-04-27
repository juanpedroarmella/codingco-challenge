import { ThemeNames, useThemeContext } from '@/styles/ThemeProvider'
import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import DiagonalArrow from './img/DiagonalArrow'
import DotsMobile from './img/DotsMobile'
import Hex from './img/Hex'

const colors = {
  dark: '#E6511B',
  light: '#000000',
  yellow: '#000000',
  orange: '#FFFFFF'
}

interface TextProps {
  theme?: Theme
  themename: ThemeNames
}

const Text = styled(Typography)<TextProps>(({ theme, themename }) => {
  const letterColor = colors[themename]
  return {
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    fontSize: '20px',
    color: letterColor,
    width: '145px',
    textAlign: 'center',
    position: 'relative',
    lineHeight: '23px',
    top: '22px',
    left: '12px',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      width: '66px',
      top: '39px',
      left: '54px'
    }
  }
})

const Container = styled(Box)(({ theme }) => {
  return {
    maxHeight: '166px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden',
      maxHeight: '125px'
    }
  }
})

export default function LastPlaces (): JSX.Element {
  const { name: themename } = useThemeContext()
  return (
    <Container data-test-id='last-places'>
      <Text themename={themename}>Últimos lugares</Text>
      <Hex themename={themename} />
      <DotsMobile themename={themename} />
      <DiagonalArrow themename={themename} />
    </Container>
  )
}
