import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import CheckAllCourses from './CheckAllCourses'

const Background = styled('a')(() => {
  return {
    width: 3000,
    background: '#000000'
  }
})

const Container = styled(Box)(() => {
  return {
    display: 'flex',
    height: '80px',
    gap: 50
  }
})

export default function SeeAllCourses (): JSX.Element {
  return (
    <Background href='#'>
      <Container>
        <CheckAllCourses />
        <CheckAllCourses />
        <CheckAllCourses />
        <CheckAllCourses />
        <CheckAllCourses />
        <CheckAllCourses />
      </Container>
    </Background>
  )
}
