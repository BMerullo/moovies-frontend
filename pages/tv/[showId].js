import { useRouter } from "next/router"
import { Card, Container } from "react-bootstrap"
import styles from "/styles/SinglePage.module.scss"

const singleMovie = ({ show }) => {
  const router = useRouter()
  const { showId } = router.query

  console.log("Info for Single show", show)
  // console.log(movieId)

  return (
    <main>
      <Container>
        <Card style={{ width: "100%" }}>
          <Card.Img
            className="rounded "
            variant="top"
            src={`http://image.tmdb.org/t/p/w500/${show.poster_path}`}
          />
        </Card>
        <section>
          <h2>{show.name}</h2>
          <h3>{show.tagline}</h3>
        </section>
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

  return {
    props: {
      show: showData,
    },
  }
}
