import useParallax from '@/hooks/useParallax'
import { useThemeContext } from '@/styles/ThemeProvider'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const colors = {
  dark: '#37A87E',
  yellow: '#0E64BA',
  light: '#37A87E',
  orange: '#0D753B'
}

const TrapSvg = styled('svg')(({ theme }) => {
  const { name: themeName } = useThemeContext()
  const fillColor = colors[themeName]
  return {
    '@keyframes rotate': {
      '0%': {
        transform: 'rotate(0)'
      },
      '50%': {
        transform: 'rotate(20deg)'
      },

      '100%': {
        transform: 'rotate(0)'
      }
    },
    width: '150px',
    height: '150px',
    animation: 'rotate 3s ease infinite',
    zIndex: -1,
    '& path': {
      fill: fillColor
    }
  }
})

const ParallaxContainer = styled(Box)(({ theme }) => {
  const offsetY = useParallax()

  return {
    position: 'absolute',
    bottom: -60,
    right: 150,
    transform: `translateY(${offsetY / 4}px)`,
    [theme.breakpoints.down('lg')]: {
      right: 50,
      bottom: -70
    },
    [theme.breakpoints.down('md')]: {
      right: 20,
      bottom: -90
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
})

export default function Trap (): JSX.Element {
  return (
    <ParallaxContainer>
      <TrapSvg
        xmlns='http://www.w3.org/2000/svg'
        width='154.055'
        height='153.953'
        viewBox='0 0 154.055 153.953'
      >
        <g transform='translate(-850.66 -480.784)'>
          <path
            d='M50.088,28.627A58.215,58.215,0,0,0,0,0,5.763,5.763,0,0,1,.039.65V116.485A58.218,58.218,0,0,0,50.088,87.859a58.218,58.218,0,0,0,50.049,28.627V.65a5.769,5.769,0,0,1,.039-.65A58.216,58.216,0,0,0,50.088,28.627Z'
            transform='translate(850.66 554.59) rotate(-47)'
            fill='#37a87e'
          />
          <rect
            width='153.953'
            height='153.953'
            transform='translate(850.763 480.784)'
            fill='none'
          />
        </g>
      </TrapSvg>
    </ParallaxContainer>
  )
}
