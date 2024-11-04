import React from "react"
import Link from "next/link"

const WatchList = ({ watchList }) => {
  return (
    <div>
      <h1>Movies Watch List</h1>
      {watchList.map((movie, index) => {
        return (
          <section key={index}>
            <Link href={`movie/${movie.movieId}`}>
              <h4>{movie.title}</h4>
            </Link>
          </section>
        )
      })}
    </div>
  )
}

export default WatchList
