import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import CheckAllCourses from './CheckAllCourses'

const Background = styled('a')(() => {
  return {
    background: '#000000'
  }
})

const Container = styled(Box)(() => {
  return {
    display: 'flex',
    height: '80px',
    gap: 50,
    position: 'relative'
  }
})

export default function SeeAllCourses(): JSX.Element {
  return (
    <Background href='#'>
      <Container>
        <CheckAllCourses delay={1} />
        <CheckAllCourses delay={5} />
        <CheckAllCourses delay={9} />
        <CheckAllCourses delay={13} />
      </Container>
    </Background>
  )
}
