import Address from '@/components/atoms/Address'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import FooterLogo from './FooterLogo'
import SocialAndCopyright from './SocialAndCopyright'

const FooterMainContainer = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    margin: 'auto',
    [theme.breakpoints.up('xs')]: {
      maxWidth: theme.breakpoints.values.xs
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: theme.breakpoints.values.sm
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md,
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 0
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values.lg
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: theme.breakpoints.values.xl
    }
  }
})

const Footer: React.FC = (): JSX.Element => {
  return (
    <Box
      data-testid='footer-container'
      component='footer'
      bgcolor='#383838'
      p={4}
    >
      <FooterMainContainer>
        <SocialAndCopyright />
        <FooterLogo />
        <Address color='#707070' />
      </FooterMainContainer>
    </Box>
  )
}

export default Footer
