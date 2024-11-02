import React, { useState, useEffect } from "react"
import styles from "../styles/UserSection.module.scss"
import Favorites from "./Favorites"
import WatchList from "./WatchList"
import axios from "axios"

const UserSection = ({ userName, userId }) => {
  const [favoriteList, setFavoriteList] = useState([])
  const [watchList, setWatchList] = useState([])

  useEffect(
    (e) => {
      axios
        .get(`http://localhost:8000/api/user/favorite/${localStorage.user}`)
        .then((res) => {
          {
            res.data ? (console.log(res.data), setFavoriteList(res.data)) : null
          }
        })
        .catch((err) => {
          console.log(err, "This is the error")
        })
    },

    []
  )
  useEffect((e) => {
    axios
      .get(`http://localhost:8000/api/user/watchList/${localStorage.user}`)
      .then((res) => {
        {
          res.data ? (console.log(res.data), setWatchList(res.data)) : null
        }
      })
      .catch((err) => {
        console.log(err, "This is the error")
      })
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
