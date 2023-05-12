import InputLabel from '@/components/atoms/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import ButtonSend from './ButtonSend'
import SelectCourse from './SelectCourse'
import { number, object, string } from 'yup'
import { useFormik } from 'formik'
import Box from '@mui/material/Box'

const StyledForm = styled('form')(({ theme }) => {
  return {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    width: '65%',
    [theme.breakpoints.down('lg')]: {
      width: '100%'
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
    }
  }
})

const InputContainer = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: 5
  }
})

const ErrorText = styled('div')(() => {
  return {
    color: '#dc3545',
    fontSize: '.875rem',
    marginTop: '.25rem'
  }
})

const ContactShema = object().shape({
  name: string().required('Campo obligatorio'),
  phone: number().required('Campo obligatorio'),
  email: string().email('E-mail inválido ').required('Campo obligatorio'),
  course: string().required('Campo obligatorio'),
  message: string().required('Campo obligatorio')
})

const initialValues = {
  name: '',
  phone: '',
  email: '',
  course: '',
  message: ''
}

export default function Form(): JSX.Element {
  const formik = useFormik({
    initialValues,
    validationSchema: ContactShema,
    onSubmit: async (values) => {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log(values)
          resolve()
        }, 3000)
      })
    }
  })

  return (
    <StyledForm onSubmit={formik.handleSubmit} autoComplete='on'>
      <InputContainer>
        <InputLabel htmlFor='formName'>Nombre*</InputLabel>
        <TextField
          id='formName'
          name='name'
          variant='standard'
          type='text'
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder='Escribe tu nombre'
          error={Boolean(formik.errors.name && formik.touched.name)}
        />
        {formik.errors.name && formik.touched.name && (
          <ErrorText>{formik.errors.name}</ErrorText>
        )}
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor='formPhone'>Télefono*</InputLabel>
        <TextField
          onChange={formik.handleChange}
          id='formPhone'
          name='phone'
          variant='standard'
          type='number'
          placeholder='Escribe tu télefono'
          value={formik.values.phone}
          error={Boolean(formik.errors.phone && formik.touched.phone)}
        />
        {formik.errors.phone && formik.touched.phone && (
          <ErrorText>{formik.errors.phone}</ErrorText>
        )}
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor='forEmail'>E-Mail*</InputLabel>
        <TextField
          onChange={formik.handleChange}
          id='formEmail'
          name='email'
          variant='standard'
          type='mail'
          placeholder='Escribe tu correo electrónico'
          value={formik.values.email}
          error={Boolean(formik.errors.email && formik.touched.email)}
        />
        {formik.errors.email && formik.touched.email && (
          <ErrorText>{formik.errors.email}</ErrorText>
        )}
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor='interestCourse'>Curso de interés</InputLabel>
        <SelectCourse
          id='interestCourse'
          onChange={formik.handleChange}
          labelId='interestCourse'
          name='course'
          value={formik.values.course}
          error={Boolean(formik.errors.course && formik.touched.course)}>
          <MenuItem value=''>
            <em>Selecciona un curso</em>
          </MenuItem>
          <MenuItem value='B. Art'>B. Art</MenuItem>
          <MenuItem value='SPRING BREAK IN THE MORNING'>
            SPRING BREAK IN THE MORNING
          </MenuItem>
          <MenuItem value='INTEGRAL 23/24'>INTEGRAL 23/24</MenuItem>
        </SelectCourse>

        {formik.errors.course && formik.touched.course && (
          <ErrorText>{formik.errors.course}</ErrorText>
        )}
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor='formMessage'>Mensaje</InputLabel>
        <TextField
          onChange={formik.handleChange}
          id='formMessage'
          placeholder='Escribe un mensaje adicional'
          multiline
          name='message'
          variant='standard'
          value={formik.values.message}
          error={Boolean(formik.errors.message && formik.touched.message)}
        />
        {formik.errors.message && formik.touched.message && (
          <ErrorText>{formik.errors.message}</ErrorText>
        )}
      </InputContainer>

      <ButtonSendContainer>
        <small>*datos obligatorios</small>
        <ButtonSend type='submit' name='submit' disabled={formik.isSubmitting}>
          Enviar
        </ButtonSend>
      </ButtonSendContainer>
    </StyledForm>
  )
}
