import { useThemeContext } from '@/styles/ThemeProvider'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useMemo } from 'react'
import FeaturedCourse from './FeaturedCourse'

const Container = styled(Box)(() => {
  return {
    overflow: 'hidden',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    maxHeight: '250px'
  }
})

const Dots = styled('svg')(({ theme }) => {
  const { name: themename } = useThemeContext()
  const strokeColor = useMemo(() => {
    if (themename === 'dark') {
      return '#E6511B'
    }
    if (
      themename === 'light' ||
      themename === 'yellow' ||
      themename === 'orange'
    ) {
      return '#000000'
    }
  }, [themename])
  return {
    position: 'relative',
    left: 0,
    bottom: '245px',
    height: '240px',
    width: '4px',
    '& path': {
      stroke: strokeColor
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
})

export default function FeaturedCourses (): JSX.Element {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Container data-test-id='featured-courses' component='ul'>
      <FeaturedCourse
        title='Curso Anual de Creatividad'
        paragraphs={['Hay plazas disponibles.', '¡Apúntate!']}
      />
      {isSm
        ? null
        : (
          <FeaturedCourse
            title='Planificacion y Estrategia Creativa'
            paragraphs={['Quedan pocas plazas.', ' ¡No te quedes fuera!']}
          />
          )}

      <Dots
        xmlns='http://www.w3.org/2000/svg'
        width='4'
        height='253.5'
        viewBox='0 0 4 253.5'
        preserveAspectRatio='none'
      >
        <g transform='translate(-1149 -308.5)'>
          <path
            d='M-10733.833,9988.96v86.475'
            transform='translate(11884.833 -9680.46)'
            fill='none'
            strokeWidth='4'
            strokeDasharray='7 8'
          />
          <path
            d='M-10733.833,9988.959v33.438'
            transform='translate(11884.833 -9460.397)'
            fill='none'
            strokeWidth='4'
            strokeDasharray='7 8'
          />
          <path
            d='M-10733.833,9988.961v110.828'
            transform='translate(11884.833 -9587.114)'
            fill='none'
            strokeWidth='4'
            strokeDasharray='6 0'
          />
        </g>
      </Dots>
    </Container>
  )
}
