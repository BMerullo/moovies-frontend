import Carousel from "react-bootstrap/Carousel"
// import styles from "styles/NowPlayingCarousel"
import styles from "../styles/NowPlayingCarousel.module.scss"

const NewReleaseCarousel = ({ playingList }) => {
  console.log("playingList", playingList)
  return (
    <>
      <h2 className="subtitle">In Theatres</h2>

      <Carousel className={styles.carousel} interval={10000} controls={false}>
        {playingList.results.map((movie, index) => {
          return (
            <Carousel.Item>
              <section className={styles.item}>
                <article className={styles.caption}>
                  <a
                    className={styles.theatersLink}
                    href={`/movie/${movie.id}`}
                  >
                    <h3>{movie.title}</h3>
                  </a>
                  <p className="text-muted">{movie.overview}</p>
                </article>
                <img
                  className={styles.img}
                  src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt="movie image"
                />
              </section>
              {/* <section className={styles.caption}></section> */}
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  )
}

export default NewReleaseCarousel
