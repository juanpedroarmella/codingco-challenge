import { styled } from '@mui/material/styles'
import Form from './Form'

const MainContainer = styled('div')(({ theme }) => {
  return {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Work Sans',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      alignItems: 'center',
      marginLeft: 0,
      '& > h5': {
        textAlign: 'center',
        margin: 0
      },
      '& > p': {
        margin: '30px 0 20px 0'
      }
    },
    '& > h5': {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 0
    },
    '& > p': {
      fontSize: 16,
      fontWeight: 'normal'
    }
  }
})

export default function ContactForm (): JSX.Element {
  return (
    <MainContainer>
      <h5>¿Quieres saber más sobre nuestros cursos?</h5>
      <p>Completa este formulario</p>
      <Form />
    </MainContainer>
  )
}
