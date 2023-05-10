import { styled } from '@mui/material/styles'
import { useId } from 'react'
import InputLabel from './InputLabel'

const StyledSelect = styled('select')(() => {
  return {
    border: '1px solid #B7B7B7',
    marginTop: 10,
    padding: 6,
    paddingRight: 40,
    height: 40,
    '&:focus-visible': {
      outline: 'none'
    }
  }
})

interface Props {
  name: string
  required?: boolean
  label: string
  children: React.ReactNode
}

export default function Select ({
  name,
  required,
  label,
  children
}: Props): JSX.Element {
  const selectId = useId()
  return (
    <>
      <InputLabel htmlFor={selectId}>{label}</InputLabel>
      <StyledSelect id={selectId} required={required} name={name}>
        {children}
      </StyledSelect>
    </>
  )
}
