import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
