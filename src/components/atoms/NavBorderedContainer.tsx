import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const NavBorderedContainer = styled(Box)(() => {
  return {
    listStyle: 'none',
    textAlign: 'center',
    borderTop: '1px dotted #707070',
    margin: 'auto 12px',
    display: 'flex',
    justifyContent: 'center'
  }
})

export default NavBorderedContainer
