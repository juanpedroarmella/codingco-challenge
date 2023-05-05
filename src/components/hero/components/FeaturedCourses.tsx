import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import FeaturedCourse from './FeaturedCourse'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Dots from './img/Dots'

const Container = styled(Box)(({ theme }) => {
  return {
    overflow: 'hidden',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    maxHeight: '250px',
    [theme.breakpoints.down('sm')]: {
      marginTop: 10
    }
  }
})

export default function FeaturedCourses (): JSX.Element {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Container data-test-id='featured-courses' component='ul'>
      {isSm
        ? (
          <Slider
            dots={false}
            infinite
            autoplay
            autoplaySpeed={6000}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
          >
            <FeaturedCourse
              title='Curso Anual de Creatividad'
              paragraphs={['Hay plazas disponibles.', ' ¡Apúntate!']}
            />
            <FeaturedCourse
              title='Planificacion y Estrategia Creativa'
              paragraphs={['Quedan pocas plazas.', ' ¡No te quedes fuera!']}
            />
          </Slider>
          )
        : (
          <>
            <FeaturedCourse
              title='Curso Anual de Creatividad'
              paragraphs={['Hay plazas disponibles.', ' ¡Apúntate!']}
            />
            <FeaturedCourse
              title='Planificacion y Estrategia Creativa'
              paragraphs={['Quedan pocas plazas.', ' ¡No te quedes fuera!']}
            />
          </>
          )}

      <Dots />
    </Container>
  )
}
