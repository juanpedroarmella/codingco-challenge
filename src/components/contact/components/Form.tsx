import { styled } from '@mui/material/styles'
import SelectCourse from './SelectCourse'
import { number, object, string } from 'yup'
import { useFormik } from 'formik'
import ContactTextField from './ContactTextField'
import Send from './Send'
import { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

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

const initialValues = {
  name: '',
  phone: '',
  email: '',
  course: '',
  message: ''
}

const ContactShema = object().shape({
  name: string().required('Campo obligatorio'),
  phone: number().required('Campo obligatorio'),
  email: string().email('E-mail inválido ').required('Campo obligatorio'),
  course: string().required('Campo obligatorio'),
  message: string().required('Campo obligatorio')
})

export default function Form (): JSX.Element {
  const [open, setOpen] = useState(false)

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ): void => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const formik = useFormik({
    initialValues,
    validationSchema: ContactShema,
    onSubmit: async () => {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          formik.resetForm()
          setOpen(true)
          resolve()
        }, 3000)
      })
    }
  })

  return (
    <StyledForm onSubmit={formik.handleSubmit} autoComplete='on'>
      <ContactTextField
        value={formik.values.name}
        error={formik.errors.name}
        touched={formik.touched.name}
        onChange={formik.handleChange}
        label='Nombre*'
        name='name'
        placeholder='Escribe tu nombre'
        type='text'
        onBlur={formik.handleBlur}
      />
      <ContactTextField
        value={formik.values.phone}
        error={formik.errors.phone}
        touched={formik.touched.phone}
        onChange={formik.handleChange}
        label='Teléfono*'
        name='phone'
        placeholder='Escribe tu télefono'
        type='number'
        onBlur={formik.handleBlur}
      />
      <ContactTextField
        value={formik.values.email}
        error={formik.errors.email}
        touched={formik.touched.email}
        onChange={formik.handleChange}
        label='E-mail*'
        name='email'
        placeholder='Escribe tu correo electrónico'
        type='email'
        onBlur={formik.handleBlur}
      />
      <SelectCourse
        onChange={formik.handleChange}
        value={formik.values.course}
        error={formik.errors.course}
        touched={formik.touched.course}
        onBlur={formik.handleBlur}
      />
      <ContactTextField
        value={formik.values.message}
        error={formik.errors.message}
        touched={formik.touched.message}
        onChange={formik.handleChange}
        label='Mensaje'
        name='message'
        placeholder='Escribe un mensaje adicional'
        type='text'
        multiline
        onBlur={formik.handleBlur}
      />

      <Send isSubmitting={formik.isSubmitting} />

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          Formulario enviado con éxito.
        </Alert>
      </Snackbar>
    </StyledForm>
  )
}
