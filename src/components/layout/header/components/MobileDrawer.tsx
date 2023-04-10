import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const Drawer = styled(Box)(({ open }: { open: boolean }) => {
  return {
    background: '#E9E6E1',
    position: 'absolute',
    top: '56px',
    left: 0,
    width: '100vw',
    zIndex: open ? 1 : -6,
    transform: open ? 'translateY(0)' : 'translateY(-56px)',
    transition: 'z-index 0.2s , transform 0.2s '
  }
})

interface Props {
  children: React.ReactNode
  open: boolean
}

const MobileDrawer: React.FC<Props> = ({ children, open }): JSX.Element => {
  return <Drawer open={open}>{children}</Drawer>
}

export default MobileDrawer
