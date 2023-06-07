// pages/_app.js
import styles from '../styles/main.module.scss'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/global.css';
import Layout from '../components/layout'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (<Layout>
    <Component {...pageProps} />
        </Layout> 
    )
}