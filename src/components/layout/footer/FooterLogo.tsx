import Image from 'next/image'

const FooterLogo: React.FC = (): JSX.Element => {
  return (
    <Image src='/white-logo.svg' width={165} height={45} alt='Logo footer' />
  )
}

export default FooterLogo
