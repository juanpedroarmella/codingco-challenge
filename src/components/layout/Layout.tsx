import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Footer from './footer/Footer'
import Header from './header/Header'

const MainLayout = styled(Box)(() => {
  return {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <MainLayout component='main' data-testid='main-layout'>
        {children}
      </MainLayout>
      <Footer />
    </>
  )
}

export default Layout
