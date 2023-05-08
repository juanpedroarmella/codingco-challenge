import type { AppContext, AppProps } from 'next/app'
import GlobalStyles from '@/styles/GlobalStyles'
import { StyledEngineProvider } from '@mui/material/styles'
import Layout from '@/components/layout/Layout'
import ThemeSwitcher from '@/styles/ThemeProvider'
import parser from 'ua-parser-js'

interface MyAppProps extends AppProps {
  deviceType: string
}

export default function App ({
  Component,
  pageProps,
  deviceType
}: MyAppProps): JSX.Element {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeSwitcher deviceType={deviceType}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ThemeSwitcher>
    </StyledEngineProvider>
  )
}

App.getInitialProps = async (context: AppContext) => {
  let deviceType

  if (context !== undefined) {
    deviceType =
      parser(context.ctx.req?.headers['user-agent']).device.type ?? 'desktop'
  }

  return {
    deviceType
  }
}
