import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const Drawer = styled(Box)(({ open }: { open: boolean }) => {
  return {
    background: '#E9E6E1',
    position: 'absolute',
    top: '56px',
    left: 0,
    width: '100%',
    padding: '0 !important',
    margin: 0,
    zIndex: -6,
    transform: open ? 'translateY(0)' : 'translateY(-100vw)',
    transition: 'transform 0.6s'
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
