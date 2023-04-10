import SocialButton from '@/components/atoms/SocialButton'
import Globe from './icons/Globe'
import Instagram from './icons/Instagram'
import Mail from './icons/Mail'

const SocialLinks: React.FC = (): JSX.Element => {
  return (
    <>
      <SocialButton href='mailto:madrid@brotherad.com' target='_blank'>
        <Mail />
      </SocialButton>
      <SocialButton
        href='https://www.instagram.com/brothermadrid/'
        target='_blank'
      >
        <Instagram />
      </SocialButton>
      <SocialButton href='https://brotherad.com//' target='_blank'>
        <Globe />
      </SocialButton>
    </>
  )
}

export default SocialLinks
