import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import styles from "../styles/Sidescroll.module.scss"

const PopularSidescroll = ({ popularList }) => {
  return (
    <>
      <section className={styles.title}>
        <a className={styles.link} href="/popular">
          <h2 className={styles.subtitle}>Popular</h2>
        </a>
        <a href="/popular">
          <h7 className={styles.subtitleLink}>See All</h7>
        </a>
      </section>
      <section className={styles.backgroundBox}>
        <article className={styles.rowContainer}>
          {popularList.results.map((movie, index) => {
            return (
              <Col>
                <div className={styles.card}>
                  <a href={`movie/${movie.id}`}>
                    <Card style={{ width: "10rem" }}>
                      <Card.Img
                        className="rounded "
                        variant="top"
                        src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      />
                    </Card>
                  </a>
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
