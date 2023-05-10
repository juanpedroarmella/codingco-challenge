import Input from '@/components/atoms/Input'
import Select from '@/components/atoms/Select'
import TextArea from '@/components/atoms/TextArea'
import { styled } from '@mui/material/styles'

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
      '& h5': {
        textAlign: 'center',
        margin: 0
      },
      '& p': {
        margin: '30px 0 20px 0'
      }
    },
    '& h5': {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 0
    },
    '& p': {
      fontSize: 16,
      fontWeight: 'normal'
    }
  }
})

const Form = styled('form')(({ theme }) => {
  return {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    '& > input,& > select,& > textarea,& button': {
      fontSize: 16,
      fontFamily: 'Work Sans',
      fontStyle: 'normal'
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    }
  }
})

const ButtonSendContainer = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    alignItems: 'start',
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center'
    },
    '& > button': {
      cursor: 'pointer',
      backgroundColor: '#FFFFFF',
      color: '#707070',
      border: '1px solid #707070',
      fontWeight: '700',
      outline: '1px solid #707070',
      padding: '15px 50px',
      marginTop: 20,
      '&:hover': {
        transition: '0.3s',
        color: '#E9E6E1',
        borderColor: '#000000',
        backgroundColor: '#707070'
      }
    }
  }
})

export default function ContactForm (): JSX.Element {
  return (
    <MainContainer>
      <h5>¿Quieres saber más sobre nuestros cursos?</h5>
      <p>Completa este formulario</p>
      <Form>
        <Input
          type='text'
          name='name'
          label='Nombre*'
          required
          placeholder='Escribe tu nombre'
        />
        <Input
          label='Télefono*'
          type='number'
          name='telephoneNumber'
          required
          placeholder='Escribe tu télefono'
        />
        <Input
          label='E-mail*'
          type='email'
          name='email'
          required
          placeholder='Escribe tu correo electrónico'
        />
        <Select name='interestedCourse' required label='Curso de interés'>
          <option>Selecciona un curso</option>
          <option value='B. Art'>B. Art</option>
          <option value='SPRINGBREAK IN THE MORNING'>
            SPRINGBREAK IN THE MORNING
          </option>
          <option value='INTEGRAL 23/4'>INTEGRAL 23/4</option>
        </Select>
        <TextArea
          label='Mensaje'
          name='mesagge'
          required
          placeholder='Escribe un mensaje adicional'
        />
        <ButtonSendContainer>
          <small>*datos obligatorios</small>
          <button type='submit' name='submit'>
            Enviar
          </button>
        </ButtonSendContainer>
      </Form>
    </MainContainer>
  )
}
