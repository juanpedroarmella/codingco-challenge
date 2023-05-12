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
      <TextField
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
