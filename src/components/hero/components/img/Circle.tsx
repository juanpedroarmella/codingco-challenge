import useParallax from '@/hooks/useParallax'
import { useThemeContext } from '@/styles/ThemeProvider'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const colors = {
  dark: '#FF1F57',
  yellow: '#000000',
  light: '#000000',
  orange: '#0E64BA'
}

const CircleSvg = styled('svg')(({ theme }) => {
  const { name: themeName } = useThemeContext()
  const fillColor = colors[themeName]

  return {
    '@keyframes jump': {
      '0%': {
        transform: 'translateY(0)'
      },
      '50%': {
        transform: 'translateY(-10px)'
      },

      '100%': {
        transform: 'translateY(0)'
      }
    },
    animation: 'jump 3s ease infinite',
    '& path': {
      fill: fillColor
    }
  }
})

const ParallaxContainer = styled(Box)(({ theme }) => {
  const offsetY = useParallax()

  return {
    position: 'absolute',
    bottom: -110,
    left: 0,
    transform: `translateY(${offsetY / 4}px)`,
    [theme.breakpoints.down('lg')]: {
      bottom: -150,
      left: 50
    },
    [theme.breakpoints.down('sm')]: {
      left: 'auto',
      bottom: -190,
      right: 60
    }
  }
})

export default function Circle (): JSX.Element {
  return (
    <ParallaxContainer>
      <CircleSvg
        xmlns='http://www.w3.org/2000/svg'
        width='33'
        height='33'
        viewBox='0 0 33 33'
      >
        <circle cx='16.5' cy='16.5' r='16.5' fill='#ff1f57' />
      </CircleSvg>
    </ParallaxContainer>
  )
}
