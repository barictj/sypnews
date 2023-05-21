// pages/_app.js
import styles from '../styles/main.module.scss'

export default function MyApp({ Component, pageProps }) {
  return <div className={styles.home}><Component {...pageProps}/></div>
}