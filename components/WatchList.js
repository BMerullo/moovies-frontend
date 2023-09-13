import React from "react"

const WatchList = ({ movieList }) => {
  console.log("This is the movielist", movieList)
  return (
    <div>
      <h1>Watch List</h1>
      {movieList
        .filter((watch) => watch.watchList === true)
        .map((filter, index) => {
          return (
            <div key={index}>
              <h4>{filter.title}</h4>
            </div>
          )
        })}
    </div>
  )
}

export default WatchList
