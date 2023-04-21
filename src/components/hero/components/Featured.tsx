import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import FeaturedCourses from './FeaturedCourses'
import LastPlaces from './LastPlaces'

const Container = styled(Box)(({ theme }) => {
  return {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: '2rem'
    }
  }
})

export default function Featured (): JSX.Element {
  return (
    <Container component='aside'>
      <LastPlaces />
      <FeaturedCourses />
    </Container>
  )
}
