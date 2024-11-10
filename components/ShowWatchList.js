import React from "react"
import Link from "next/link"

const ShowWatchList = ({ showWatchList }) => {
  return (
    <div>
      <h1>Show WatchList</h1>

      {showWatchList.map((show, index) => {
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

export default ShowWatchList
