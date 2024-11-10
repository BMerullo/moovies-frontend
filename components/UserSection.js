import React, { useState, useEffect } from "react"
import styles from "../styles/UserSection.module.scss"
import axios from "axios"
import Favorites from "./Favorites"
import WatchList from "./WatchList"
import ShowFavorites from "./ShowFavorites"
import ShowWatchList from "./showWatchList"

const UserSection = ({ userName, userId }) => {
  const [favoriteList, setFavoriteList] = useState([])
  const [watchList, setWatchList] = useState([])
  const [showFavoriteList, setShowFavoriteList] = useState([])
  const [showWatchList, setShowWatchList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch favorite list
        const favoriteRes = await axios.get(
          `http://localhost:8000/api/user/favorite/${localStorage.user}`
        )
        if (favoriteRes.data) {
          console.log(favoriteRes.data)
          setFavoriteList(favoriteRes.data)
        }

        // Fetch watch list
        const watchListRes = await axios.get(
          `http://localhost:8000/api/user/watchList/${localStorage.user}`
        )
        if (watchListRes.data) {
          console.log(watchListRes.data)
          setWatchList(watchListRes.data)
        }

        // Fetch show favorite list
        const showFavoriteRes = await axios.get(
          `http://localhost:8000/api/user/showFavorite/${localStorage.user}`
        )
        if (showFavoriteRes.data) {
          console.log(showFavoriteRes.data)
          setShowFavoriteList(showFavoriteRes.data)
        }

        // Fetch show watch list
        const showWatchListRes = await axios.get(
          `http://localhost:8000/api/user/showWatchList/${localStorage.user}`
        )
        if (showWatchListRes.data) {
          console.log(showWatchListRes.data, "<-- showWatchList")
          setShowWatchList(showWatchListRes.data)
        }
      } catch (err) {
        console.log(err, "This is the error")
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <main className={styles.main}>
        <p>
          Welcome to your MOOVIES{" "}
          <span style={{ color: "#0d6efd" }}>{userName}</span>
        </p>
        <section className={styles.userContent}>
          <Favorites favoriteList={favoriteList} />
          <WatchList watchList={watchList} />
        </section>
        <section className={styles.userContent}>
          <ShowFavorites showFavoriteList={showFavoriteList} />
          <ShowWatchList showWatchList={showWatchList} />
        </section>
      </main>
    </>
  )
}

export default UserSection

// export async function getServerSideProps() {
//   const movieResponse = await fetch(
//     `http://localhost:8000/api/user/movie/${localStorage.getItem("user")}`
//   )
//   const movieData = await movieResponse.json()
//   console.log("List of user movies", movieData)
//   return {
//     props: {
//       movieList: movieData,
//     },
//   }
// }

// ${localStorage.getItem("user")}
