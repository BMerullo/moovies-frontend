import React from "react"
import Card from "react-bootstrap/Card"
import styles from "../styles/TVLayout.module.scss"

const TVLayout = ({ list, title }) => {
  return (
    <>
      <h1 className={styles.subtitle}>{title}</h1>
      <flex className={styles.flex}>
        {list.results.map((show, index) => {
          return (
            <article className={styles.card} key={index}>
              <a className={styles.link} href={`/tv/${show.id}`}>
                <Card style={{ width: "18rem" }} bg="dark" border="secondary">
                  <Card.Img
                    className="rounded"
                    src={`http://image.tmdb.org/t/p/w500/${show.backdrop_path}`}
                  />
                  <Card.Body>
                    <div className={styles.text}>
                      <Card.Title>{show.name}</Card.Title>
                      <Card.Text className="text-muted">
                        Air Date: {show.first_air_date}
                      </Card.Text>
                      <Card.Text className="text-muted">
                        {show.overview}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </article>
          )
        })}
      </flex>
    </>
  )
}

export default TVLayout
