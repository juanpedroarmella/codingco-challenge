import { styled } from '@mui/material/styles'
import Link from 'next/link'

const StyledListItem = styled('li')(() => {
  return {
    borderTop: '1px solid black',
    listStyle: 'none',
    padding: '1rem 2rem',
    margin: 'auto 1rem',
    textAlign: 'center'
  }
})

const MobileNavLink = styled(Link)(() => {
  return {
    textDecoration: 'none'
  }
})

interface Props {
  href: string
  children: React.ReactNode
}
const MobileNavButton: React.FC<Props> = ({ href, children }): JSX.Element => {
  return (
    <StyledListItem>
      <MobileNavLink href={href}>{children}</MobileNavLink>
    </StyledListItem>
  )
}

export default MobileNavButton
