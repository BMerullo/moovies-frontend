import React from "react"

const Favorites = ({ movieList }) => {
  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {movieList
          .filter((favorite) => favorite.favorite === true)
          .map((filter, index) => {
            return (
              <section key={index}>
                <h4>{filter.title}</h4>
              </section>
            )
          })}
      </div>
    </div>
  )
}

export default Favorites
