import React from "react"
import Card from "react-bootstrap/Card"

import styles from "../styles/MovieLayout.module.scss"

const MovieLayout = ({ list }) => {
  return (
    <flex className={styles.flex}>
      {list.results.map((movie, index) => {
        return (
          <article className={styles.card}>
            <Card style={{ width: "18rem" }} bg="dark" border="secondary">
              <Card.Img
                className="rounded"
                src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              />
              <Card.Body>
                <div className={styles.text}>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text className="text-muted">{movie.overview}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </article>
        )
      })}
    </flex>
  )
}

export default MovieLayout
