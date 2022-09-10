import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Sudhanshu Ranjan" />
        <meta name="author" content="Spectre_7" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta property="og:site_name" content="Sudhanshu Ranjan" />
        <meta name="og:title" content="Sudhanshu Ranjan" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Sudhanshu Ranjan - Homepage",
  keywords: 'web development, programming, frontend development',
  description: "Sudhanshu's Homepage",
}

export default Meta