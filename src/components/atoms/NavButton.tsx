import Link from '@mui/material/Link'
import { styled, Theme } from '@mui/material/styles'

const NavButton = styled(Link)(({ theme }: { theme?: Theme }) => {
  return {
    color: theme?.palette.text.primary,
    fontSize: '16px',
    textAlign: 'center',
    padding: '20px',
    height: '100%',
    textDecoration: 'none ',
    '&:hover': {
      fontWeight: 'bold',
      textDecoration: 'underline'
    }
  }
})

export default NavButton
