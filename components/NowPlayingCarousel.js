import Carousel from "react-bootstrap/Carousel"
import styles from "../styles/NowPlayingCarousel.module.scss"
import Link from "next/link"

const NewReleaseCarousel = ({ playingList }) => {
  return (
    <>
      <section className={styles.title}>
        <Link className={styles.link} href="/playing">
          <h2 className={styles.subtitle}>In Theatres</h2>
        </Link>
        <Link href="/playing">
          <h6 className={styles.subtitleLink}>See All</h6>
        </Link>
      </section>

      <Carousel className={styles.carousel} interval={10000} controls={false}>
        {playingList.results.map((movie, index) => {
          return (
            <Carousel.Item key={index}>
              <Link className={styles.theatersLink} href={`/movie/${movie.id}`}>
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
              </Link>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  )
}

export default NewReleaseCarousel
