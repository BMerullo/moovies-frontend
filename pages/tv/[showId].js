import ProviderModal from "@/components/ProviderModal"

import { Card, Container } from "react-bootstrap"
import styles from "/styles/SinglePageTv.module.scss"

const SingleShow = ({ show, providers }) => {
  return (
    <main>
      <Container>
        <Card className={styles.card}>
          <Card.Img
            className={styles.cardImg}
            src={`http://image.tmdb.org/t/p/w500/${show.backdrop_path}`}
            alt="show poster"
          />
          <Card.Body className={styles.cardBody}>
            <img
              className={styles.poster}
              src={`http://image.tmdb.org/t/p/w500/${show.poster_path}`}
              alt="movie poster"
            />
            <content className={styles.content}>
              <header className={styles.cardHeader}>
                <h1>{show.name}</h1>
                <Card.Subtitle>{show.tagline}</Card.Subtitle>
              </header>
              <section className="mb-2 text-muted">
                <Card.Text>Language: {show.original_language}</Card.Text>
                <Card.Text>First Aired: {show.first_air_date}</Card.Text>
                <Card.Text>Seasons: {show.number_of_seasons}</Card.Text>
                <div className={styles.genresContainer}>
                  <Card.Text>Genres:</Card.Text>
                  {show.genres.map((genre, index) => {
                    return (
                      <Card.Text key={index} className={styles.genre}>
                        {genre.name}
                      </Card.Text>
                    )
                  })}
                </div>
                <Card.Text className="mb-2 text-muted">
                  {show.overview}
                </Card.Text>
                <article className={styles.streamingContainer}>
                  <h3>Streaming On...</h3>
                  <ProviderModal providers={providers} />
                </article>
              </section>
            </content>
          </Card.Body>
        </Card>
      </Container>
    </main>
  )
}

export default SingleShow

export async function getServerSideProps(context) {
  console.log("SHOW", context.params.showId)

  const showResponse = await fetch(
    `https://api.themoviedb.org/3/tv/${context.params.showId}?api_key=1d1f8fe4a0523780c901154040d7aa0c&language=en-US`
  )
  const showData = await showResponse.json()
  const providersResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.showId}/watch/providers?api_key=1d1f8fe4a0523780c901154040d7aa0c&language=en-US`
  )
  const providersData = await providersResponse.json()

  return {
    props: {
      show: showData,
      providers: providersData,
    },
  }
}
