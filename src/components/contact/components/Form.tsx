import InputLabel from '@/components/atoms/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import ButtonSend from './ButtonSend'
import SelectCourse from './SelectCourse'

const StyledForm = styled('form')(({ theme }) => {
  return {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    },
    width: '70%'
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
    }
  }
})

export default function Form (): JSX.Element {
  return (
    <StyledForm>
      <InputLabel htmlFor='formName'>Nombre*</InputLabel>
      <TextField
        id='formName'
        name='name'
        variant='standard'
        type='text'
        placeholder='Escribe tu nombre'
      />
      <InputLabel htmlFor='formTelephone'>Télefono*</InputLabel>
      <TextField
        id='formTelephone'
        name='thelephone'
        variant='standard'
        type='number'
        placeholder='Escribe tu télefono'
      />
      <InputLabel htmlFor='formMail'>E-Mail*</InputLabel>
      <TextField
        id='formMail'
        name='mail'
        variant='standard'
        type='mail'
        placeholder='Escribe tu correo electrónico'
      />

      <InputLabel htmlFor='interestCourse'>Curso de interés</InputLabel>

      <SelectCourse id='interestCourse' labelId='interestCourse' value=' '>
        <MenuItem value=' '>
          <em>Selecciona un curso</em>
        </MenuItem>
        <MenuItem value='B. Art'>B. Art</MenuItem>
        <MenuItem value='SPRING BREAK IN THE MORNING'>
          SPRING BREAK IN THE MORNING
        </MenuItem>
        <MenuItem value='INTEGRAL 23/24'>INTEGRAL 23/24</MenuItem>
      </SelectCourse>

      <InputLabel htmlFor='formMessage'>Mensaje</InputLabel>
      <TextField
        id='formMessage'
        placeholder='Escribe un mensaje adicional'
        multiline
        variant='standard'
      />
      <ButtonSendContainer>
        <small>*datos obligatorios</small>
        <ButtonSend type='submit' name='submit'>
          Enviar
        </ButtonSend>
      </ButtonSendContainer>
    </StyledForm>
  )
}
