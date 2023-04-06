import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const HeaderMainContainer = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderMainContainer data-testid='header-container' component='header'>
      <Typography>header</Typography>
    </HeaderMainContainer>
  )
}

export default Header
