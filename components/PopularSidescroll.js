import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import styles from "../styles/Sidescroll.module.scss"
import Link from "next/link"

const PopularSidescroll = ({ popularList }) => {
  return (
    <>
      <section className={styles.title}>
        <Link className={styles.link} href="/popular">
          <h2 className={styles.subtitle}>Popular Movies</h2>
        </Link>
        <Link href="/popular">
          <h6 className={styles.subtitleLink}>See All</h6>
        </Link>
      </section>
      <section className={styles.backgroundBox}>
        <article className={styles.rowContainer}>
          {popularList.results.map((movie, index) => {
            return (
              <Col key={index}>
                <div className={styles.card}>
                  <Link href={`movie/${movie.id}`}>
                    <Card style={{ width: "10rem" }}>
                      <Card.Img
                        className="rounded "
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      />
                    </Card>
                  </Link>
                </div>
              </Col>
            )
          })}
        </article>
      </section>
    </>
  )
}

export default PopularSidescroll
