import React from "react"

const Favorites = ({ favoriteList }) => {
  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {favoriteList
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
