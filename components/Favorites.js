import React from "react"
import Link from "next/link"
import styles from "../styles/UserSideScroll.module.scss"
import Card from "react-bootstrap/Card"

const Favorites = ({ favoriteList }) => {
  console.log(favoriteList, "<---DATA")
  return (
    <>
      <h1>Favorite Movies</h1>

      <section className={styles.backgroundBox}>
        <article className={styles.rowContainer}>
          {favoriteList.map((movie, index) => {
            return (
              <section key={index}>
                <div className={styles.card}>
                  <Link href={`movie/${movie.movieId}`}>
                    <Card style={{ width: "6rem" }}>
                      <Card.Img
                        className="rounded "
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
                      />
                    </Card>
                  </Link>
                </div>
              </section>
            )
          })}
        </article>
      </section>
    </>
  )
}

export default Favorites
