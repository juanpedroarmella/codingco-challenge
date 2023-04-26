import useParallax from '@/hooks/useParallax'
import { useThemeContext } from '@/styles/ThemeProvider'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const colors = {
  dark: '#FF1F57',
  yellow: '#FF1F57',
  light: '#37A87E',
  orange: '#E1DF3C'
}

const AsteriskSvg = styled('svg')(() => {
  const { name: themeName } = useThemeContext()
  const fillColor = colors[themeName]

  return {
    '@keyframes rotate': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '50%': {
        transform: 'rotate(20deg)'
      },

      '100%': {
        transform: 'rotate(0deg)'
      }
    },
    animation: 'rotate 3s ease infinite',
    '& path': {
      fill: fillColor
    },
    width: 60,
    height: 60
  }
})

const ParallaxContainer = styled(Box)(({ theme }) => {
  const offsetY = useParallax()

  return {
    position: 'absolute',
    top: -30,
    left: 0,
    transform: `translateY(${offsetY / 4}px)`,
    [theme.breakpoints.down('md')]: {
      top: -125,
      left: 25
    }
  }
})

export default function Asterisk(): JSX.Element {
  return (
    <ParallaxContainer>
      <AsteriskSvg
        xmlns='http://www.w3.org/2000/svg'
        width='51.848'
        height='51.848'
        viewBox='0 0 51.848 51.848'>
        <g transform='translate(-630.868 124.848)'>
          <path
            d='M682.716-101.066v4.21h-.222q-7.461-.444-14.476-1.034-8.494-.591-9.823-.665l2.511,1.182q14.106,6.648,19.424,9.38l.221.148-2.142,3.619-.148-.148q-5.467-3.545-13.737-9.158-4.653-3.249-6.5-4.431l4.062,5.982q5.39,7.683,9.675,14.255l.074.148-3.62,2.142-.073-.222Q665.8-79.794,661.3-89.175q-2.291-4.8-4.137-8.567,0,.517.517,6.573,1.034,13.221,1.256,17.947V-73h-4.21v-.222q.444-7.459,1.034-14.476.591-8.492.665-9.822l-1.182,2.511q-6.647,14.108-9.379,19.424l-.148.221-3.62-2.141.148-.148q3.546-5.465,9.159-13.738,3.248-4.653,4.431-6.5l-5.983,4.062q-7.681,5.392-14.254,9.675l-.148.074-2.142-3.62.222-.074q4.135-2.141,13.516-6.647,4.8-2.289,8.567-4.137-.518,0-6.573.517Q635.816-97,631.09-96.782h-.222v-4.209h.222q7.459.443,14.476,1.033,8.492.593,9.823.665l-2.511-1.182q-14.108-6.647-19.424-9.379l-.221-.148,2.141-3.62.148.148q5.465,3.545,13.737,9.158,4.653,3.25,6.5,4.431l-4.062-5.983q-5.392-7.68-9.675-14.254l-.074-.148,3.619-2.142.074.222q2.141,4.137,6.647,13.516,2.287,4.8,4.135,8.568,0-.517-.516-6.574-1.036-13.219-1.256-17.947v-.222h4.21v.222q-.443,7.461-1.034,14.476-.592,8.494-.665,9.823l1.182-2.511q6.647-14.106,9.38-19.424l.148-.222,3.619,2.141-.148.148q-3.545,5.466-9.158,13.737-3.251,4.653-4.431,6.5l5.982-4.062q7.68-5.39,14.254-9.675l.148-.074,2.142,3.619-.222.074q-4.137,2.143-13.516,6.647-4.8,2.289-8.567,4.136.515,0,6.573-.517,13.219-1.034,17.947-1.256Z'
            transform='translate(0)'
            fill='#0e64ba'
          />
        </g>
      </AsteriskSvg>
    </ParallaxContainer>
  )
}
