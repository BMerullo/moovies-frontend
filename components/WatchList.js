import React from "react"

const WatchList = ({ watchList }) => {
  return (
    <div>
      <h1>Watch List</h1>
      {watchList
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
