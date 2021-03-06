import { AppProps } from 'next/app'
import Head from 'next/head'
import Provider from 'Context/Provider'
import { ThemeProvider } from 'styled-components'
import db from '../../db.json'

import GlobalStyles from 'styles/global'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider>
        <Head>
          <title>Quiz Imersão Alura - Next.JS</title>
          <link rel="shortcut icon" href="/img/logo-dragon-ball-super.png" />
          <link rel="apple-touch-icon" href="/img/logo-dragon-ball-super.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Syled Components"
          />
        </Head>
        <ThemeProvider theme={db.theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
