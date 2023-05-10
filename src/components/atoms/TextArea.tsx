import { styled } from '@mui/material/styles'
import { useId } from 'react'
import InputLabel from './InputLabel'

const StyledTextArea = styled('textarea')(() => {
  return {
    border: 0,
    borderBottom: '1px solid #B7B7B7',
    color: '#000000',
    height: 40,
    '&::placeholder': {
      color: '#707070'
    },
    '&:focus-visible': {
      outline: 'none'
    }
  }
})

interface Props {
  name: string
  required?: boolean
  label: string
  placeholder: string
}

export default function TextArea ({
  name,
  required,
  label,
  placeholder
}: Props): JSX.Element {
  const inputId = useId()
  return (
    <>
      <InputLabel htmlFor={inputId}>{label}</InputLabel>
      <StyledTextArea
        id={inputId}
        required={required}
        name={name}
        placeholder={placeholder}
      />
    </>
  )
}
