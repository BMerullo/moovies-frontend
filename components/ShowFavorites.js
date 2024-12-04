import React from "react"
import Link from "next/link"
import styles from "../styles/UserSideScroll.module.scss"
import Card from "react-bootstrap/Card"

const ShowFavorites = ({ showFavoriteList }) => {
  console.log(showFavoriteList, "<---SHOW LIST")
  return (
    <>
      <h1>Favorite Shows</h1>
      <section className={styles.backgroundBox}>
        <article className={styles.rowContainer}>
          {showFavoriteList.map((movie, index) => {
            return (
              <section key={index}>
                <div className={styles.card}>
                  <Link href={`tv/${movie.showId}`}>
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

export default ShowFavorites
