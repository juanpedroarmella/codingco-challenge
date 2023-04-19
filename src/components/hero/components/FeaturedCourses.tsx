import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import FeaturedCourse from './FeaturedCourse'

const Container = styled(Box)(() => {
  return {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
})

export default function FeaturedCourses (): JSX.Element {
  return (
    <Container data-test-id='featured-courses' component='ul'>
      <FeaturedCourse
        title='Curso Anual de Creatividad'
        paragraphs={['Hay plazas disponibles.', '¡Apúntate!']}
      />
      <FeaturedCourse
        title='Planificacion y Estrategia Creativa'
        paragraphs={['Quedan pocas plazas.', ' ¡No te quedes fuera!']}
      />
    </Container>
  )
}
