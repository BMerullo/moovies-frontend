import React, { useState, useEffect } from "react"

import ProviderModal from "@/components/ProviderModal"
import axios from "axios"
import { Card, Container } from "react-bootstrap"
import styles from "/styles/SinglePageTv.module.scss"

const SingleShow = ({ show, providers }) => {
  const [favorite, setFavorite] = useState(false)
  const [watchList, setWatchList] = useState(false)

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/user/${localStorage.user}/showFavorite/${show.id}`
      )
      .then((res) => {
        console.log(res.data)
        if (res.data) setFavorite(true)
        else setFavorite(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/user/${localStorage.user}/showWatchList/${show.id}`
      )
      .then((res) => {
        console.log(res.data)
        if (res.data) setWatchList(true)
        else setWatchList(false)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  const submitFavorite = (e) => {
    const selectedData = {
      showId: show.id,
      name: show.name,
      image: show.poster_path,
    }

    axios
      .post("http://localhost:8000/api/showFavorite", selectedData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("res.data", res.data)
        setFavorite(true)
      })
  }

  const submitWatchList = (e) => {
    const selectedData = {
      showId: show.id,
      name: show.name,
      image: show.poster_path,
    }

    axios
      .post("http://localhost:8000/api/showWatchList", selectedData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("res.data", res.data)
        setWatchList(true)
      })
  }
  return (
    <main>
      <Container>
        <section className={styles.btnSection}>
          {favorite === true ? (
            <div className={styles.heart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 22 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </div>
          ) : (
            <div className={styles.btn2}>
              <span className={styles.btnText}>Add to Favorites</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 22 20"
                onClick={submitFavorite}
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </div>
          )}
          {watchList === true ? (
            <div className={styles.star}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 22 20"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
          ) : (
            <div className={styles.btn1}>
              <span className={styles.btnText}>Add to Watchlist</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-star"
                viewBox="0 0 22 20"
                onClick={submitWatchList}
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            </div>
          )}
        </section>
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
