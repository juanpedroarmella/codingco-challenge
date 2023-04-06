import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/GlobalStyles'
import {
  StyledEngineProvider,
  ThemeProvider,
  useTheme
} from '@mui/material/styles'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  const theme = useTheme()
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
