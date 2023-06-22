import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import styles from "../styles/PopularPage.module.scss"

const PopularLayout = ({ popularList }) => {
  return (
    <flex className={styles.flex}>
      {popularList.results.map((movie, index) => {
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
                  <Card.Text>{movie.overview}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </div>
              </Card.Body>
            </Card>
          </article>
        )
      })}
    </flex>
  )
}

export default PopularLayout
