import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import styles from "../styles/Sidescroll.module.scss"

const PopularShowSidescroll = ({ popularShowList }) => {
  console.log(popularShowList, "This is the list of shows")
  return (
    <>
      <section className={styles.title}>
        <a className={styles.link} href="/popularTV">
          <h2 className={styles.subtitle}>Popular Shows</h2>
        </a>
        <a href="/popularTV">
          <h7 className={styles.subtitleLink}>See All</h7>
        </a>
      </section>
      <div className={styles.backgroundBox}>
        <section className={styles.rowContainer}>
          {popularShowList.results.map((show, index) => {
            return (
              <Col>
                <div className={styles.card}>
                  <a href={`tv/${show.id}`}>
                    <Card style={{ width: "10rem" }}>
                      <Card.Img
                        className="rounded "
                        variant="top"
                        src={`http://image.tmdb.org/t/p/w500/${show.poster_path}`}
                      />
                    </Card>
                  </a>
                </div>
              </Col>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default PopularShowSidescroll
