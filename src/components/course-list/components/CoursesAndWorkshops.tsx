import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useMediaQuery, useTheme } from '@mui/material'
import CarouselDesktop from './CarouselDeskop'
import CarouselMobile from './CarouselMobile'

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

export default function CoursesAndWorkshops (): JSX.Element {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <MainContainer component='section'>
      <Title>Cursos & Workshops</Title>
      {isSm ? <CarouselMobile /> : <CarouselDesktop />}
    </MainContainer>
  )
}
