import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const ButtonSend = styled(Button)(() => {
  return {
    backgroundColor: 'white',
    color: '#707070',
    borderColor: '#707070',
    position: 'relative',
    padding: '15px 50px',
    lineHeight: 1,
    margin: '30px 0 0 0',
    outline: 'none',
    transition: '0.3s',
    border: '2px solid black',
    textDecoration: 'none',
    fontWeight: 700,
    fontFamily: 'Work Sans',
    textTransform: 'capitalize',
    fontSize: '1rem',
    borderRadius: 0,
    '&:hover': {
      color: '#E9E6E1',
      borderColor: 'black',
      backgroundColor: 'transparent'
    },
    '&:before': {
      zIndex: -1,
      content: '""',
      position: 'absolute',
      left: 0,
      top: 'auto',
      bottom: 0,
      right: 0,
      backgroundColor: '#707070',
      height: 0,
      transition: '0.3s'
    },
    '&:hover:before': {
      height: '100%'
    }
  }
})

export default ButtonSend
