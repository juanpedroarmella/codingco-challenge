import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useMediaQuery, useTheme } from '@mui/material'
import ProductCarousel from './ProductCarousel'

const MainContainer = styled(Box)(({ theme }) => {
  return {
    minWidth: '50%',
    position: 'relative'
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
    fontStyle: 'normal',
    [theme.breakpoints.down('sm')]: {
      width: '65%'
    }
  }
})

export default function CoursesAndWorkshops (): JSX.Element {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <MainContainer component='section'>
      <Title>Cursos & Workshops</Title>
      <ProductCarousel productsperslide={isSm ? 2 : 3} />
    </MainContainer>
  )
}
