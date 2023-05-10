import { styled } from '@mui/material/styles'
import Bear from '../img/Bear'

const Container = styled('div')(() => {
  return {
    width: '40%'
  }
})

const Title = styled('h3')(() => {
  return {
    marginTop: 0,
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    fontSize: 48
  }
})

export default function BearSection (): JSX.Element {
  return (
    <Container>
      <Title>#Sosloquehacés</Title>
      <Bear />
    </Container>
  )
}
