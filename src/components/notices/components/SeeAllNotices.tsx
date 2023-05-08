import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import CheckAllNotices from './CheckAllNotices'

const Background = styled('a')(() => {
  return {
    background: '#FF1F57'
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

export default function SeeAllNotices(): JSX.Element {
  return (
    <Background href='#'>
      <Container>
        <CheckAllNotices delay={1} />
        <CheckAllNotices delay={4.2} />
        <CheckAllNotices delay={7.4} />
        <CheckAllNotices delay={10.6} />
        <CheckAllNotices delay={13.8} />
      </Container>
    </Background>
  )
}
