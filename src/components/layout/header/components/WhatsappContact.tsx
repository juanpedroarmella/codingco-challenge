import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const WhatsappContact: React.FC = (): JSX.Element => {
  return (
    <Box
      component='a'
      display='flex'
      alignItems='center'
      gap={2}
      href='https://api.whatsapp.com/send?phone=+34612278409'
      target='_blank'>
      <Image
        src='/icon-whatsapp-menu.svg'
        width={24}
        height={24}
        alt='Whataspp contact'
      />
      <Typography fontSize='12.8px'>915 76 68 76</Typography>
    </Box>
  )
}

export default WhatsappContact
