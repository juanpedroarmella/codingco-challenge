import { styled } from '@mui/material/styles'
import { HTMLInputTypeAttribute, useId } from 'react'
import InputLabel from './InputLabel'

const StyledInput = styled('input')(() => {
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
  type: HTMLInputTypeAttribute
  placeholder: string
}

export default function Input ({
  name,
  required,
  label,
  type,
  placeholder
}: Props): JSX.Element {
  const inputId = useId()
  return (
    <>
      <InputLabel htmlFor={inputId}>{label}</InputLabel>
      <StyledInput
        id={inputId}
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </>
  )
}
