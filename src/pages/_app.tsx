import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/GlobalStyles'
import {
  StyledEngineProvider,
  ThemeProvider,
  useTheme
} from '@mui/material/styles'
import Layout from '@/components/layout/Layout'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  const theme = useTheme()
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
