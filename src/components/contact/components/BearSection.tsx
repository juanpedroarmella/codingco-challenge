import { styled } from '@mui/material/styles'
import Bear from '../img/Bear'

const Container = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
})

const Title = styled('h3')(({ theme }) => {
  return {
    marginTop: 0,
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    fontSize: 48,
    [theme.breakpoints.down('lg')]: {
      fontSize: 35,
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 31,
      textAlign: 'center'
    }
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
