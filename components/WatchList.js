import React from "react"

const WatchList = ({ watchList }) => {
  return (
    <div>
      <h1>Watch List</h1>
      {watchList.map((movie, index) => {
        return (
          <section key={index}>
            <h4>{movie.title}</h4>
          </section>
        )
      })}
    </div>
  )
}

export default WatchList
