import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useMediaQuery, useTheme } from '@mui/material'
import ProductCarousel from './ProductCarousel'
import Image from 'next/image'

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

    [theme.breakpoints.down(725)]: {
      width: '65%'
    }
  }
})

const YellowHex = styled(Image)(({ theme }) => {
  return {
    position: 'absolute',
    top: -20,
    right: -30,
    zIndex: -1,
    [theme.breakpoints.down('md')]: {
      top: -20,
      right: -90
    },
    [theme.breakpoints.down('md')]: {
      right: -110
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
      <YellowHex
        src='/yellow-hex-full.svg'
        width={248}
        height={255}
        alt='Yellow hex ilustration'
      />
    </MainContainer>
  )
}
