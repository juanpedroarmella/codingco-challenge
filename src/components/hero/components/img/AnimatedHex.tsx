import useParallax from '@/hooks/useParallax'
import { useThemeContext } from '@/styles/ThemeProvider'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const colors = {
  dark: '#E1DF3C',
  light: '#E1DF3C',
  yellow: '#FF1F57',
  orange: '#37A87E'
}

const HexSvg = styled('svg')(() => {
  const { name: themeName } = useThemeContext()
  const fillColor = colors[themeName]

  return {
    '@keyframes rotate': {
      '0%': {
        transform: 'rotate(20deg)'
      },
      '50%': {
        transform: 'rotate(35deg)'
      },

      '100%': {
        transform: 'rotate(20deg)'
      }
    },
    animation: 'rotate 3s ease infinite',
    '& path': {
      stroke: fillColor,
      fill: themeName === 'light' ? '#E1DF3C' : 'none'
    },
    width: 189,
    height: 187,
    zIndex: 0
  }
})

const ParallaxContainer = styled(Box)(({ theme }) => {
  const offsetY = useParallax()

  return {
    position: 'absolute',
    bottom: 50,
    left: 0,
    transform: `translateY(${offsetY / 4}px)`,
    [theme.breakpoints.down('lg')]: {
      bottom: -60
    },
    [theme.breakpoints.down('md')]: {
      bottom: -60,
      left: -20
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
})

export default function AnimatedHex (): JSX.Element {
  return (
    <ParallaxContainer>
      <HexSvg
        xmlns='http://www.w3.org/2000/svg'
        width='62.238'
        height='61.771'
        viewBox='0 0 62.238 61.771'
      >
        <path
          id='Figura_móvil_hexagono_azul'
          data-name='Figura móvil_hexagono azul'
          d='M31.828,0H10.609L0,18.376,10.609,36.752H31.828L42.437,18.376Z'
          transform='translate(3.055 31.428) rotate(-42)'
          strokeWidth='3'
        />
      </HexSvg>
    </ParallaxContainer>
  )
}
