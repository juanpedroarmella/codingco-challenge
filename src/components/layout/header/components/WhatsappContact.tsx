import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const TelephoneNumber = styled(Typography)(({ theme }) => {
  return {
    fontSize: '12.8px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down(325)]: {
      display: 'none'
    }
  }
})

const WhatsappContact: React.FC = (): JSX.Element => {
  return (
    <Box
      component='a'
      display='flex'
      alignItems='center'
      gap={2}
      href='https://api.whatsapp.com/send?phone=+34612278409'
      target='_blank'
    >
      <Image
        src='/icon-whatsapp-menu.svg'
        width={24}
        height={24}
        alt='Whataspp contact'
      />
      <TelephoneNumber>915 76 68 76</TelephoneNumber>
    </Box>
  )
}

export default WhatsappContact
