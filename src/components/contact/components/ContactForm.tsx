import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const MainContainer = styled('div')(() => {
  return {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Work Sans',
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

const Form = styled('form')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    width: '50%'
  }
})

export default function ContactForm (): JSX.Element {
  return (
    <MainContainer>
      <h5>¿Quieres saber más sobre nuestros cursos?</h5>
      <p>Completa este formulario</p>
      <Form>
        <label htmlFor='formName'>Nombre*</label>
        <input type='text' name='name' id='formName' required />
        <label htmlFor='formTelephoneNumber'>Télefono*</label>
        <input
          type='number'
          name='telephoneNumber'
          id='formTelephoneNumber'
          required
        />
        <label htmlFor='formEmail'>E-mail*</label>
        <input type='email' name='email' id='formEmail' required />
        <label htmlFor='forminterestedCourse'>Curso de interés</label>
        <select name='interestedCourse' id='forminterestedCourse' required>
          <option>Selecciona un curso</option>
          <option value='B. Art'>B. Art</option>
          <option value='SPRINGBREAK IN THE MORNING'>
            SPRINGBREAK IN THE MORNING
          </option>
          <option value='INTEGRAL 23/4'>INTEGRAL 23/4</option>
        </select>
        <label htmlFor='formMessage'>Mensaje</label>
        <textarea
          id='formMessage'
          name='mesagge'
          required
          placeholder='Escribe un mensaje adicional'
        />
        <Box display='grid' gap={2} width='50%' mt={2}>
          <small>* datos obligatorios</small>
          <button type='submit' name='submit'>
            Enviar
          </button>
        </Box>
      </Form>
    </MainContainer>
  )
}
