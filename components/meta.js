import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="viewport" content="initial-scale=1" />
      <meta name="description" content="SOP8 je symfonický orchestr, který vznikl v roce 2004. Složení členů orchestru je tvořeno většinou studenty, ať středních či vysokých škol, nebo mladými pracujícími."/>
    </Head>
  )
}
