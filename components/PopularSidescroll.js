import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import styles from "../styles/Sidescroll.module.scss"

const PopularSidescroll = ({ popularList }) => {
  // console.log(popularList, "This is the list of movies")
  return (
    <>
      <h2 className="subtitle">Popular</h2>
      <div className={styles.backgroundBox}>
        <section className={styles.rowContainer}>
          {popularList.results.map((movie, index) => {
            return (
              <Col>
                <div className={styles.card}>
                  <Card style={{ width: "10rem" }}>
                    <Card.Img
                      className="rounded "
                      variant="top"
                      src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
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

export default PopularSidescroll
