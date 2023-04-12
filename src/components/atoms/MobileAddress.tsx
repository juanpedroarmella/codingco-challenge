import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SocialLinks from '../layout/header/components/SocialLinks'
import NavBorderedContainer from './NavBorderedContainer'

const MobileAddress: React.FC = (): JSX.Element => {
  return (
    <NavBorderedContainer
      component='li'
      py='20px'
      display='flex'
      flexDirection='column'
      gap={2}
    >
      <Box
        component='address'
        display='grid'
        fontStyle='normal'
        fontFamily='Work Sans'
      >
        <Typography
          variant='h6'
          fontFamily='Larken'
          fontSize='24px'
          fontWeight='700'
          mb={1}
        >
          Ven a conocernos
        </Typography>
        <Typography>Calle de las huertas 48,</Typography>
        <Typography>28014, Madrid</Typography>

        <Box display='flex' justifyContent='center' gap={1}>
          <a href='tel:+34 915 76 68 76'>+34 915 76 68 76</a>
          <Typography>|</Typography>
          <a href='tel:+34 612 27 84 09'>+34 612 27 84 09</a>
        </Box>
        <a href='mailto:madrid@brotherad.com'>madrid@brotherad.com</a>
      </Box>
      <SocialLinks />
    </NavBorderedContainer>
  )
}

export default MobileAddress
