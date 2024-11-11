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

  useEffect((e) => {
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
  }, [])

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

  useEffect((e) => {
    axios
      .get(`http://localhost:8000/api/user/showFavorite/${localStorage.user}`)
      .then((res) => {
        {
          res.data
            ? (console.log(res.data), setShowFavoriteList(res.data))
            : null
        }
      })
      .catch((err) => {
        console.log(err, "This is the error")
      })
  }, [])

  useEffect((e) => {
    axios
      .get(`http://localhost:8000/api/user/showWatchList/${localStorage.user}`)
      .then((res) => {
        {
          res.data
            ? (console.log(res.data, "<-- showWatchList"),
              setShowWatchList(res.data),
              console.log(showWatchList, "<-- showWatchList"))
            : null
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
        <section className={styles.userContent}>
          <ShowFavorites showFavoriteList={showFavoriteList} />
          <ShowWatchList showWatchList={showWatchList} />
        </section>
      </main>
    </>
  )
}

export default UserSection
