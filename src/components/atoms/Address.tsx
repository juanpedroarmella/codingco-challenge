import useIsMobile from '@/hooks/useIsMobile'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface AddressProps {
  color: string
}

const Address: React.FC<AddressProps> = ({ color }): JSX.Element => {
  const isMobile = useIsMobile()
  return (
    <Box
      component='address'
      display='grid'
      fontStyle='normal'
      fontFamily='Work Sans'
      color={color}
      textAlign={isMobile ? 'center' : 'start'}
    >
      <Typography>Calle de las huertas 48,</Typography>
      <Typography>28014, Madrid</Typography>

      <Box display='flex' justifyContent='center' gap={1}>
        <a href='tel:+34 915 76 68 76'>+34 915 76 68 76</a>
        <Typography>|</Typography>
        <a href='tel:+34 612 27 84 09'>+34 612 27 84 09</a>
      </Box>
      <a href='mailto:madrid@brotherad.com'>madrid@brotherad.com</a>
    </Box>
  )
}

export default Address
