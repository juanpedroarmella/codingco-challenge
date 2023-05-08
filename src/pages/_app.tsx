import type { AppContext, AppProps } from 'next/app'
import GlobalStyles from '@/styles/GlobalStyles'
import { StyledEngineProvider } from '@mui/material/styles'
import Layout from '@/components/layout/Layout'
import ThemeSwitcher, { ThemeNames } from '@/styles/ThemeProvider'
import parser from 'ua-parser-js'

interface MyAppProps extends AppProps {
  deviceType: string
  theme: ThemeNames
}

export default function App ({
  Component,
  pageProps,
  deviceType,
  theme
}: MyAppProps): JSX.Element {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeSwitcher theme={theme} deviceType={deviceType}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ThemeSwitcher>
    </StyledEngineProvider>
  )
}

App.getInitialProps = async (context: AppContext) => {
  const theme = Object.values(ThemeNames)[
    Math.floor(Math.random() * Object.keys(ThemeNames).length)
  ] as ThemeNames

  let deviceType

  if (context !== undefined) {
    deviceType =
      parser(context.ctx.req?.headers['user-agent']).device.type ?? 'desktop'
  }

  return {
    theme,
    deviceType
  }
}
