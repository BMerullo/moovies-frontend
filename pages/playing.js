import React from "react"
import MovieLayout from "@/components/MovieLayout"

const nowPlaying = ({ playingList }) => {
  return (
    <main>
      <MovieLayout list={playingList} />
    </main>
  )
}

export default nowPlaying

export async function getServerSideProps() {
  const playingResponse = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?&language=en-US&page=1&region=US&api_key=1d1f8fe4a0523780c901154040d7aa0c`
  )
  const playingData = await playingResponse.json()
  return {
    props: {
      playingList: playingData,
    },
  }
}
