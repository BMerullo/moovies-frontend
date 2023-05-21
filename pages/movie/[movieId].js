import React, { useState } from "react"
import { Card, Container, Button } from "react-bootstrap"
import styles from "/styles/SinglePage.module.scss"
import Image from "react-bootstrap/Image"
import ProviderModal from "@/components/ProviderModal"

const singleMovie = ({ movie, providers }) => {
  const [modalShow, setModalShow] = useState(false)

  console.log("These are the providers", providers)
  console.log("Info for Single movie", movie)

  return (
    <main>
      <Container>
        <Card className={styles.card}>
          <Card.Img
            className={styles.cardImg}
            variant="top"
            src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          />
          <Card.Body className={styles.cardBody}>
            <content className={styles.content}>
              <header className={styles.cardHeader}>
                <h1>{movie.title}</h1>
                <Card.Subtitle>{movie.tagline}</Card.Subtitle>
              </header>
              <section className="mb-2 text-muted">
                <p>{movie.overview}</p>
                <p>Language: {movie.original_language}</p>
                <p>Status: {movie.status} </p>
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
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie poster"
            />
          </Card.Body>
        </Card>
      </Container>
    </main>
  )
}

export default singleMovie

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
