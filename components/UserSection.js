import React, { useState, useEffect } from "react"
import styles from "../styles/UserSection.module.scss"
import Favorites from "./Favorites"
import WatchList from "./WatchList"
import axios from "axios"

const UserSection = ({ userName, userId }) => {
  // const [userId, setUserId] = useState("")
  const [movieList, setMovieList] = useState([])
  console.log("Hello", userId)

  useEffect(
    (e) => {
      // setUserId(localStorage.getItem("user"))
      axios
        .get(`http://localhost:8000/api/user/movie/${userId}`)
        .then((res) => {
          console.log(res.data)
          setMovieList(res.data)
          console.log(movieList)
        })
        .catch((err) => {
          console.log(err)
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
