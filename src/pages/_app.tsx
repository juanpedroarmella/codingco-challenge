import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/GlobalStyles'
import { StyledEngineProvider } from '@mui/material/styles'
import Layout from '@/components/layout/Layout'
import ThemeSwitcher from '@/styles/ThemeProvider'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeSwitcher>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ThemeSwitcher>
    </StyledEngineProvider>
  )
}
