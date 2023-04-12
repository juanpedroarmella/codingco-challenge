import useIsMobile from '@/hooks/useIsMobile'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SocialLinks from '../header/components/SocialLinks'

const SocialAndCopyright: React.FC = (): JSX.Element => {
  const isMobile = useIsMobile()
  return (
    <Box display='grid' gap={2}>
      <SocialLinks
        fill='#707070'
        width='34px'
        height='27px'
        px='16px'
        my={2}
      />
      <Box
        display='flex'
        justifyContent={isMobile ? 'center' : 'space-between'}
        gap={1}
        fontFamily='Gotham'
        color='#707070'
        fontSize='13px'
      >
        <Typography>2021</Typography>
        <Typography>Brother Madrid</Typography>
      </Box>
    </Box>
  )
}

export default SocialAndCopyright
