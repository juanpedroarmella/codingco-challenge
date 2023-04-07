import Head from 'next/head'

const pageTitle = 'Brother Madrid - Home'
const pageDescription = 'Escuela de creativos'
const pageKeywords =
  'cursos creativos, cursos de diseño gráfico, cursos de ilustración, cursos de fotografía, cursos de publicidad, cursos de marketing digital'
const pageAuthor = 'Brother Madrid'

const MetaTags: React.FC = (): JSX.Element => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name='description' content={pageDescription} />
      <meta name='keywords' content={pageKeywords} />
      <meta name='author' content={pageAuthor} />
      <meta name='robots' content='index, follow' />
      <meta name='language' content='es' />
      <meta name='rating' content='general' />
      <meta name='distribution' content='global' />
      <meta name='geo.region' content='ES-MD' />
      <meta name='geo.placename' content='Madrid' />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={pageDescription} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={pageAuthor} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={pageDescription} />
    </Head>
  )
}

export default MetaTags
