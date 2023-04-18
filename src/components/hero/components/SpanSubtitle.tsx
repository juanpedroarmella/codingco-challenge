import { useThemeContext } from '@/styles/ThemeProvider'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useMemo } from 'react'

const StyledSpan = styled(Box)(({ theme }) => {
  return {
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    color: theme.palette.text.primary
  }
})

const MainContainer = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '55%',
    left: '14%',
    top: '67%',
    height: '125px',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      left: '22.5%',
      top: '55%'
    }
  }
})

const Hex = styled('svg')(() => {
  const { name: themeName } = useThemeContext()
  const strokeColor = useMemo(() => {
    if (themeName === 'dark') {
      return '#0E64BA'
    }
    if (themeName === 'light' || themeName === 'yellow') {
      return '#E9E6E1'
    }
    if (themeName === 'orange') {
      return '#0D753B'
    }
  }, [themeName])
  return {
    position: 'absolute',
    width: '54px',
    heigh: '54px',
    top: '-25%',
    zIndex: -1,
    '& path': {
      stroke: strokeColor
    }
  }
})

export default function SpanSubtitle (): JSX.Element {
  return (
    <MainContainer>
      <StyledSpan component='span'>Doers School</StyledSpan>
      <Hex
        xmlns='http://www.w3.org/2000/svg'
        width='189.285'
        height='187.866'
        viewBox='0 0 189.285 187.866'
      >
        <path
          d='M99.54,0H33.18L0,57.47l33.18,57.47H99.54L132.72,57.47Z'
          transform='translate(6.873 95.628) rotate(-42)'
          fill='none'
          strokeWidth='12'
        />
      </Hex>
    </MainContainer>
  )
}
