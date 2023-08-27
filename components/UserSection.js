import React from "react"
import styles from "../styles/UserSection.module.scss"
import Link from "next/link"
import Favorites from "./Favorites"
import WatchList from "./WatchList"

const UserSection = ({ userName }) => {
  return (
    <>
      {/* <section className={styles.title}>
        <Link className={styles.link} href="/playing">
          <h2 className={styles.subtitle}>Moovies For {userName}</h2>
        </Link>
        <Link href="/playing">
          <h6 className={styles.subtitleLink}>See All</h6>
        </Link>
      </section> */}
      <main className={styles.main}>
        <p>
          Welcome to your MOOVIES{" "}
          <span style={{ color: "#0d6efd" }}>{userName}</span>
        </p>
        <section className={styles.userContent}>
          <Favorites />

          <WatchList />
        </section>
      </main>
    </>
  )
}

export default UserSection
