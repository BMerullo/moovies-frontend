import React, { useState } from "react"
import { Card, Container, Button } from "react-bootstrap"
import styles from "/styles/SinglePage.module.scss"
import ProviderModal from "@/components/ProviderModal"

const SingleMovie = ({ movie, providers }) => {
  console.log(movie)
  return (
    <main>
      <Container>
        <section className={styles.btnContainer}>
          <div className={styles.btn}>
            <button bsClass={styles.btn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-star"
                viewBox="0 0 22 20"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
              Watch List
            </button>
          </div>
          <div className={styles.btn}>
            <button variant="outline-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 22 20"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
              Favorites
            </button>
          </div>
        </section>
        <Card className={styles.card}>
          <Card.Img
            className={styles.cardImg}
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          />
          <Card.Body className={styles.cardBody}>
            <content className={styles.content}>
              <header className={styles.cardHeader}>
                <h1>{movie.title}</h1>
                <Card.Subtitle>{movie.tagline}</Card.Subtitle>
              </header>
              <section className="mb-2 text-muted">
                <Card.Text>{movie.overview}</Card.Text>
                <Card.Text>Language: {movie.original_language}</Card.Text>
                <Card.Text>Release Date: {movie.release_date} </Card.Text>
                <div className={styles.genresContainer}>
                  <Card.Text>Genres:</Card.Text>
                  {movie.genres.map((genre, index) => {
                    return (
                      <Card.Text key={index} className={styles.genre}>
                        {genre.name}
                      </Card.Text>
                    )
                  })}
                </div>
                <a href={movie.homepage}>
                  <Button variant="primary">Webpage</Button>
                </a>
                <article className={styles.streamingContainer}>
                  <h3>Streaming On...</h3>
                  <ProviderModal providers={providers} />
                </article>
              </section>
            </content>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie poster"
            />
          </Card.Body>
        </Card>
      </Container>
    </main>
  )
}

export default SingleMovie

export async function getServerSideProps(context) {
  console.log("MOVIE", context.params.movieId)

  const movieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.movieId}?api_key=1d1f8fe4a0523780c901154040d7aa0c&language=en-US`
  )
  const movieData = await movieResponse.json()
  const providersResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.movieId}/watch/providers?api_key=1d1f8fe4a0523780c901154040d7aa0c&language=en-US`
  )
  const providersData = await providersResponse.json()

  return {
    props: {
      movie: movieData,
      providers: providersData,
    },
  }
}
