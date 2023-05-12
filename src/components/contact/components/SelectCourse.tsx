import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'

const SelectCourse = styled(Select)(() => ({
  marginTop: 10,
  borderRadius: 0,
  border: '1px solid #B7B7B7',
  height: 40,
  '&::after': {
    content: '""',
    position: 'absolute',
    width: 0,
    right: '14%',
    height: '100%',
    borderLeft: '1px solid #B7B7B7'
  },
  '& fieldset': {
    border: 0
  }
}))

export default SelectCourse
