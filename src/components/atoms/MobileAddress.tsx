import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SocialLinks from '../layout/header/components/SocialLinks'
import Address from './Address'
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
      <Box>
        <Typography
          variant='h6'
          fontFamily='Larken'
          fontSize='24px'
          fontWeight='700'
          mb={1}
        >
          Ven a conocernos
        </Typography>
        <Address color='#000000' />
      </Box>
      <SocialLinks
        width='34px'
        height='27px'
        px='12.5px'
        fill='#707070'
        my='16.5px'
      />
    </NavBorderedContainer>
  )
}

export default MobileAddress
