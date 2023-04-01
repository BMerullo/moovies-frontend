import Head from "next/head"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import React, { useState, useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

const Home = ({ popularList }) => {
  console.log(popularList, "This is the list of movies")
  return (
    <>
      <Head>
        <title>MOOVIES</title>
        <meta
          name="description"
          content="Community for people who love movies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>MOOVIES</h1>
        {popularList.results.map((movie, index) => {
          return (
            <div key={index}>
              <p>{movie.title}</p>
              <img
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="image"
              />
            </div>
          )
        })}
        <p>A community for people who like movies</p>
      </main>
    </>
  )
}
export default Home

export async function getServerSideProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=76e97ee4b0b9bbd10b8a54f5b87265c0`
  )
  const data = await response.json()
  // console.log(data)

  return {
    props: {
      popularList: data,
    },
  }
}
