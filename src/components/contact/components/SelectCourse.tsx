import InputLabel from '@/components/atoms/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import { FocusEventHandler, ReactNode } from 'react'
import ErrorText from './ErrorText'
import InputContainer from './InputContainer'

const StyledSelect = styled(Select)(() => ({
  marginTop: 10,
  borderRadius: 0,
  border: '1px solid #B7B7B7',
  height: 40,
  '&::after': {
    content: '""',
    position: 'absolute',
    width: 0,
    right: '10%',
    height: '100%',
    borderLeft: '1px solid #B7B7B7'
  }
}))

interface Props {
  value: string | number
  error: string | undefined
  touched: boolean | undefined
  onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void
  onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export default function SelectCourse ({
  onChange,
  value,
  error,
  touched,
  onBlur
}: Props): JSX.Element {
  return (
    <InputContainer>
      <InputLabel htmlFor='interestCourse'>Curso de interés</InputLabel>
      <StyledSelect
        onBlur={onBlur}
        id='interestCourse'
        onChange={onChange}
        labelId='interestCourse'
        name='course'
        value={value}
        error={Boolean(error !== undefined && touched === true)}
      >
        <MenuItem value=''>
          <em>Selecciona un curso</em>
        </MenuItem>
        <MenuItem value='B. Art'>B. Art</MenuItem>
        <MenuItem value='SPRING BREAK IN THE MORNING'>
          SPRING BREAK IN THE MORNING
        </MenuItem>
        <MenuItem value='INTEGRAL 23/24'>INTEGRAL 23/24</MenuItem>
      </StyledSelect>

      {error !== undefined && touched === true && (
        <ErrorText>{error}</ErrorText>
      )}
    </InputContainer>
  )
}
