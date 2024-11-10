import React from "react"
import Link from "next/link"

const ShowFavorites = ({ showFavoriteList }) => {
  return (
    <div>
      <h1>Favorite Shows</h1>

      {showFavoriteList.map((show, index) => {
        return (
          <section key={index}>
            <Link href={`/tv/${show.showId}`}>
              <h4>{show.name}</h4>
            </Link>
          </section>
        )
      })}
    </div>
  )
}

export default ShowFavorites
