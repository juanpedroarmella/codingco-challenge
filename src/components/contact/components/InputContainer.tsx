import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const InputContainer = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: 5
  }
})

export default InputContainer
