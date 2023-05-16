import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import {
  FocusEventHandler,
  HTMLInputTypeAttribute,
  useCallback,
  useId
} from 'react'
import CheckIcon from '@mui/icons-material/Check'
import InputLabel from '@/components/atoms/InputLabel'
import InputContainer from './InputContainer'
import ErrorText from './ErrorText'
import { styled } from '@mui/material/styles'

const StyledTextField = styled(TextField)(({ error, value }) => {
  return {
    '& div:before': {
      borderBottomColor: value !== '' && error === false ? '#2e7d32' : 'auto'
    },
    '& .MuiInputBase-root.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before':
      {
        borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
      },
    '& div:after': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
    }
  }
})

interface Props {
  value: string | number
  error: string | undefined
  touched: boolean | undefined
  onChange: (e: React.ChangeEvent<any>) => void
  label: string
  name: string
  placeholder: string
  type: HTMLInputTypeAttribute | undefined
  multiline?: boolean
  onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export default function ContactTextField({
  value,
  error,
  touched,
  onChange,
  label,
  name,
  placeholder,
  type,
  multiline,
  onBlur
}: Props): JSX.Element {
  const inputId = useId()

  const handleErrorIcon = useCallback(
    (error: string | undefined, touched: boolean | undefined) => {
      if (error !== undefined && touched === true) {
        return {
          endAdornment: (
            <InputAdornment position='start'>
              <ErrorOutlineIcon color='error' fontSize='small' />
            </InputAdornment>
          )
        }
      }
      if (touched === true) {
        return {
          endAdornment: (
            <InputAdornment position='start'>
              <CheckIcon color='success' fontSize='small' />
            </InputAdornment>
          )
        }
      }
      return {}
    },
    []
  )

  return (
    <InputContainer>
      <InputLabel htmlFor={inputId}>{label}</InputLabel>
      <StyledTextField
        id={inputId}
        name={name}
        variant='standard'
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        InputProps={handleErrorIcon(error, touched)}
        error={Boolean(error !== undefined && touched === true)}
        multiline={multiline ?? false}
      />
      {error !== undefined && touched === true && (
        <ErrorText>{error}</ErrorText>
      )}
    </InputContainer>
  )
}
