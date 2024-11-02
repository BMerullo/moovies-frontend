import React from "react"

const Favorites = ({ favoriteList }) => {
  return (
    <div>
      <h1>Favorites</h1>

      {favoriteList.map((movie, index) => {
        return (
          <section key={index}>
            <h4>{movie.title}</h4>
          </section>
        )
      })}
    </div>
  )
}

export default Favorites
