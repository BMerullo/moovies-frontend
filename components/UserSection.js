import React, { useState, useEffect } from "react"
import styles from "../styles/UserSection.module.scss"
import Favorites from "./Favorites"
import WatchList from "./WatchList"
import axios from "axios"

const UserSection = ({ userName, userId }) => {
  const [movieList, setMovieList] = useState([])

  useEffect(
    (e) => {
      axios
        .get(`http://localhost:8000/api/user/movie/${userId}`)
        .then((res) => {
          console.log(res.data)
          setMovieList(res.data)
        })
        .catch((err) => {
          console.log(err, "This is the error")
        })
    },
    [userId]
  )
  return (
    <>
      <main className={styles.main}>
        <p>
          Welcome to your MOOVIES{" "}
          <span style={{ color: "#0d6efd" }}>{userName}</span>
        </p>
        <section className={styles.userContent}>
          <Favorites movieList={movieList} />
          <WatchList movieList={movieList} />
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
