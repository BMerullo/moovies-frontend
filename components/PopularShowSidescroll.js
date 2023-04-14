import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import styles from "../styles/Sidescroll.module.scss"

const PopularShowSidescroll = ({ popularShowList }) => {
  console.log(popularShowList, "This is the list of shows")
  return (
    <>
      <h2 className="subtitle">Popular TV Shows</h2>
      <div className={styles.backgroundBox}>
        <section className={styles.rowContainer}>
          {popularShowList.results.map((show, index) => {
            return (
              <Col>
                <div className={styles.card}>
                  <Card style={{ width: "10rem" }}>
                    <Card.Img
                      className="rounded "
                      variant="top"
                      src={`http://image.tmdb.org/t/p/w500/${show.poster_path}`}
                    />
                    {/* <p>{show.title}</p> */}
                  </Card>
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
