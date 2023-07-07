import React, { useState } from "react"
import { Card, Container, Button } from "react-bootstrap"
import styles from "/styles/SinglePage.module.scss"
import ProviderModal from "@/components/ProviderModal"

const SingleMovie = ({ movie, providers }) => {
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
                <p>Release Date: {movie.release_date} </p>
                <div className={styles.genresContainer}>
                  <p>Genres:</p>
                  {movie.genres.map((genre, index) => {
                    return <p className={styles.genre}>{genre.name}</p>
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
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
