// pages/_app.js
import styles from '../styles/main.module.scss'
import '../styles/global.css';
export default function MyApp({ Component, pageProps }) {
  return <div id="__next"  className={styles.home}><Component {...pageProps}/></div>
}