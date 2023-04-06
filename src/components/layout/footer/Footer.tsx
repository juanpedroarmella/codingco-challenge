import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const FooterMainContainer = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterMainContainer data-testid='footer-container' component='footer'>
      <Typography>footer</Typography>
    </FooterMainContainer>
  )
}

export default Footer
