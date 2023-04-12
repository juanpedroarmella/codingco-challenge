import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Globe from './icons/Globe'
import Instagram from './icons/Instagram'
import Mail from './icons/Mail'

interface SocialLinkProps {
  fill: string
  width: number | string
  height: number | string
  px: number | string
  my: number | string
}

const SocialLinks: React.FC<SocialLinkProps> = ({
  fill,
  width,
  height,
  px,
  my
}): JSX.Element => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' my={my}>
      <Link
        href='mailto:madrid@brotherad.com'
        target='_blank'
        px={px}
        rel='noreferrer'
      >
        <Mail fill={fill} width={width} height={height} />
      </Link>
      <Link
        href='https://www.instagram.com/brothermadrid/'
        target='_blank'
        px={px}
        rel='noreferrer'
      >
        <Instagram fill={fill} width={width} height={height} />
      </Link>
      <Link
        href='https://brotherad.com//'
        target='_blank'
        px={px}
        rel='noreferrer'
      >
        <Globe fill={fill} width={width} height={height} />
      </Link>
    </Box>
  )
}

export default SocialLinks
