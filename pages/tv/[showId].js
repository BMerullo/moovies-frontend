import ProviderModal from "@/components/ProviderModal"
// import { useRouter } from "next/router"
import { Card, Container } from "react-bootstrap"
import styles from "/styles/SinglePageTv.module.scss"

const singleMovie = ({ show, providers }) => {
  // const router = useRouter()
  // const { showId } = router.query

  console.log("Providers", providers)
  console.log("Info for Single show", show)
  // console.log(movieId)

  return (
    <main>
      <Container>
        <Card className={styles.card}>
          <img
            className={styles.poster}
            src={`http://image.tmdb.org/t/p/w500/${show.poster_path}`}
            alt="show poster"
          />
          <Card.Body className={styles.cardBody}>
            <header className={styles.cardHeader}>
              <h1>{show.name}</h1>
              <Card.Subtitle>{show.tagline}</Card.Subtitle>
            </header>
            <section>
              <Card.Text className="mb-2 text-muted">{show.overview}</Card.Text>

              <article className={styles.streamingContainer}>
                <h3>Streaming On...</h3>
                <ProviderModal providers={providers} />
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
