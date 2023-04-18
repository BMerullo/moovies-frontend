import { useRouter } from "next/router"
import { Card, Container } from "react-bootstrap"
import styles from "/styles/SinglePage.module.scss"

const singleMovie = ({ movie }) => {
  const router = useRouter()
  const { movieId } = router.query

  console.log("Info for Single movie", movie)
  // console.log(movieId)

  return (
    <main>
      <Container className={styles.container}>
        <Card style={{ width: "25rem" }}>
          <Card.Img
            className="rounded"
            variant="top"
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </Card>
        <section>
          <article>
            <header className={styles.header}>
              <section>
                <h2>{movie.title}</h2>
                <h3>{movie.tagline}</h3>
              </section>
              <section>
                <a href={movie.homepage}>Visit HomePage</a>
                <p>{movie.overview}</p>
              </section>
            </header>
          </article>
        </section>
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
