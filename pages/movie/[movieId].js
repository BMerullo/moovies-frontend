import { Card, Container, Button } from "react-bootstrap"
import styles from "/styles/SinglePage.module.scss"
import Image from "react-bootstrap/Image"

const singleMovie = ({ movie }) => {
  const navigate = (e) => {}

  console.log("Info for Single movie", movie)
  console.log(movie.genre_ids)

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
                <Card.Title>{movie.title}</Card.Title>
                <Card.Subtitle>{movie.tagline}</Card.Subtitle>
              </header>
              <section className="mb-2 text-muted">
                <p>{movie.overview}</p>
                <p>Language: {movie.original_language}</p>
                <p>Status: {movie.status} </p>
                <Button variant="primary">Webpage</Button>
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

  return {
    props: {
      movie: movieData,
    },
  }
}
