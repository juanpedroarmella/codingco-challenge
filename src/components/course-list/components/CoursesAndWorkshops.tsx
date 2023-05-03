import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Product from './Product'

const MainContainer = styled(Box)(({ theme }) => {
  return {
    minWidth: '50%'
  }
})

const Title = styled('h3')(({ theme }) => {
  return {
    fontFamily: 'Larken',
    fontSize: 39,
    color: '#000000',
    marginTop: 0,
    marginBottom: '50px',
    fontWeight: 'bold',
    fontStyle: 'normal'
  }
})

const CarouselContainer = styled(Box)(({ theme }) => {
  return {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'center',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
      gap: '5px'
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  }
})

export default function CoursesAndWorkshops (): JSX.Element {
  return (
    <MainContainer component='section'>
      <Title>Cursos & Workshops</Title>
      <CarouselContainer>
        <Product
          type='course'
          title='PR & Comunicación 2021'
          img='/thumb-01.jpg'
          places='few'
          alt='Imagen del curso "PR & Comunicación 2021"'
        />
        <Product
          type='course'
          title='Curso Anual de Creatividad'
          img='/thumb-02.jpg'
          places='avaliable'
          alt='Imagen del curso "Curso Anual de Creatividad"'
        />
        <Product
          type='course'
          title='Planificación y Estrategia Creativa 2021'
          img='/thumb-03.jpg'
          places='none'
          alt='Imagen del curso "Planificación y Estrategia Creativa 2021"'
        />
        <Product
          type='workshop'
          title='Planificación y Estrategia Creativa '
          img='/thumb-04.jpg'
          alt='Imagen del curso "Planificación y Estrategia Creativa"'
        />
        <Product
          type='workshop'
          title='Digital y Social Media'
          img='/thumb-05.jpg'
          alt='Imagen del curso "Digital y Social Media"'
        />
        <Product
          type='workshop'
          title='Design Thinking'
          img='/thumb-06.jpg'
          alt='Imagen del curso "Design Thinking"'
        />
      </CarouselContainer>
    </MainContainer>
  )
}
