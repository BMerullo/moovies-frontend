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
                <img
                  className="rounded"
                  src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt="movie image"
                />
                <article className={styles.caption}>
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                  <p>{movie.release_date}</p>
                </article>
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
