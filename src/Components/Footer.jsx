import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';
import styles from "./Footer.module.css";

const Footer = () => {

  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer>
      <div className={styles.footerWrapper}>
        <button className={`btn btn-danger ${styles.top}`} onClick={scrollToTop}>Back to the top</button>
        <div className={`${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} ${styles.footer}`}>
          <div className="container">
            <div className={`row`}>
              <div className={`col-sm-12 col-lg-6 container-footer ${isDarkMode ? styles.iconsDark : ''} ${styles.icons}`}>
                <img className={`${isDarkMode ? styles.iconsDark : ''} ${styles.dhLogo}`} src="/images/DH.png" alt='DH-logo' />
                <a href="https://www.facebook.com" role={"btnFacebook"}><img src="/images/ico-facebook.png" alt="icono de facebook" className={styles.icon} /></a>
                <a href="https://www.instagram.com" role={"btnInstagram"}><img src="/images/ico-instagram.png" alt="icono de instagram" className={styles.icon} /></a>
                <a href="https://www.whatsapp.com" role={"btnWhatsapp"}><img src="/images/ico-whatsapp.png" alt="icono de whatsapp" className={styles.icon} /></a>
                <a href="https://www.tiktok.com" role={"btnTiktok"}><img src="/images/ico-tiktok.png" alt="icono de tiktok" className={styles.icon} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer >
  )
}

export default Footer

