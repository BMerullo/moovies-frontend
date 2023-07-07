import Container from "react-bootstrap/Container"
import styles from "../styles/Footer.module.scss"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <Container>
        <section className={styles.footerContent}>
          <article className={styles.published}>
            <p>
              <span>©{year} </span>Bob Merullo
            </p>
          </article>
          <article>
            <p className={styles.source}>* data provided by TMDB </p>
            <p className={styles.source}>
              * all streaming data provided by JustWatch
            </p>
          </article>
        </section>
      </Container>
    </footer>
  )
}

export default Footer
