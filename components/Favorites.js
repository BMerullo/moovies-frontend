import React from "react"
import Link from "next/link"

const Favorites = ({ favoriteList }) => {
  return (
    <div>
      <h1>Favorite Movies</h1>

      {favoriteList.map((movie, index) => {
        return (
          <section key={index}>
            <Link href={`/movie/${movie.movieId}`}>
              <h4>{movie.title}</h4>
            </Link>
          </section>
        )
      })}
    </div>
  )
}

export default Favorites
