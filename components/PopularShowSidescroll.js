import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import styles from "../styles/Sidescroll.module.scss"
import Link from "next/link"

const PopularShowSidescroll = ({ popularShowList }) => {
  console.log(popularShowList)
  return (
    <>
      <section className={styles.title}>
        <Link className={styles.link} href="/popularTV">
          <h2 className={styles.subtitle}>Popular Shows</h2>
        </Link>
        <Link href="/popularTV">
          <h6 className={styles.subtitleLink}>See All</h6>
        </Link>
      </section>
      <div className={styles.backgroundBox}>
        <section className={styles.rowContainer}>
          {popularShowList.results.map((show, index) => {
            return (
              <Col key={index}>
                <div className={styles.card}>
                  <Link href={`tv/${show.id}`}>
                    <Card style={{ width: "10rem" }}>
                      <Card.Img
                        className="rounded "
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                      />
                    </Card>
                  </Link>
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
