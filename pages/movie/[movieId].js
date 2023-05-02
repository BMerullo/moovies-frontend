import { useRouter } from "next/router"
import { Card, Container, Button } from "react-bootstrap"
import styles from "/styles/SinglePage.module.scss"
import Image from "react-bootstrap/Image"

const singleMovie = ({ movie }) => {
  const router = useRouter()
  const { movieId } = router.query

  const navigate = (e) => {}

  console.log("Info for Single movie", movie)
  console.log(movie.genre_ids)

  return (
    <main>
      <Container className={styles.container}>
        <Card className={styles.card}>
          <section className={styles.imgContainer}>
            <Card.Img
              variant="top"
              src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            />
            <header className={styles.imgOverlay}>
              <h1>{movie.title}</h1>
              <h3>{movie.tagline}</h3>
            </header>
          </section>
          <Card.Body className={styles.cardBody}>
            <Card.Text>{movie.overview}</Card.Text>
            <section>
              <article>{/* <Card.Title>{movie.title}</Card.Title> */}</article>
              <article className={styles.movieInfo}>
                <div>
                  <p>Runtime {movie.runtime} min.</p>
                  {/* {movie.genre_ids.map((genre, index) => {
                    return <p key={index}>{genre}</p>
                  })} */}
                  <Button variant="primary" onCLick={navigate}>
                    Website
                  </Button>
                </div>
                <Image
                  className="rounded"
                  src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              </article>
            </section>
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
