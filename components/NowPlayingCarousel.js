import Carousel from "react-bootstrap/Carousel"
// import styles from "styles/NowPlayingCarousel"
import styles from "../styles/NowPlayingCarousel.module.scss"

const NewReleaseCarousel = ({ playingList }) => {
  console.log("playingList", playingList)
  return (
    <>
      <section className={styles.title}>
        <h2 className="subtitle">In Theatres</h2>
        <a href="/playing">
          <h7 className={styles.subtitleLink}>See All</h7>
        </a>
      </section>

      <Carousel className={styles.carousel} interval={10000} controls={false}>
        {playingList.results.map((movie, index) => {
          return (
            <Carousel.Item>
              <a className={styles.theatersLink} href={`/movie/${movie.id}`}>
                <section className={styles.item}>
                  <article className={styles.caption}>
                    <h3>{movie.title}</h3>
                    <p className="text-muted">{movie.overview}</p>
                  </article>
                  <img
                    className={styles.img}
                    src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt="movie image"
                  />
                </section>
              </a>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  )
}

export default NewReleaseCarousel
