import { styled } from '@mui/material/styles'
import ButtonSend from './ButtonSend'

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

interface Props {
  isSubmitting: boolean
}

export default function Send ({ isSubmitting }: Props): JSX.Element {
  return (
    <ButtonSendContainer>
      <small>*datos obligatorios</small>
      <ButtonSend type='submit' name='submit' disabled={isSubmitting}>
        Enviar
      </ButtonSend>
    </ButtonSendContainer>
  )
}
