import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Container from "react-bootstrap/Container"
import PopularSidescroll from "@/components/PopularSidescroll"
import NowPlayingCarousel from "@/components/NowPlayingCarousel"
import PopularShowSidescroll from "@/components/PopularShowSidescroll"
import Logout from "@/components/Logout"

const UserPage = ({ popularList, playingList, popularShowList }) => {
  const router = useRouter()
  const [id, setId] = useState()
  const userName = router.query.userName
  useEffect(() => {
    setId(localStorage.getItem("user"))
  }, [])
  return (
    <>
      <main>
        <Container>
          <p>
            you are in the user page{" "}
            <span style={{ color: "green" }}>{userName}</span>
          </p>
          <PopularSidescroll popularList={popularList} />
          <NowPlayingCarousel playingList={playingList} />
          <PopularShowSidescroll popularShowList={popularShowList} />
          <Logout />
        </Container>
      </main>
    </>
  )
}

export default UserPage

export async function getServerSideProps() {
  const popularResponse = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d1f8fe4a0523780c901154040d7aa0c`
  )
  const popularData = await popularResponse.json()

  const playingResponse = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?&language=en-US&page=1&region=US&api_key=1d1f8fe4a0523780c901154040d7aa0c`
  )
  const playingData = await playingResponse.json()

  const popularShowResponse = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=1d1f8fe4a0523780c901154040d7aa0c&`
  )
  const popularShowData = await popularShowResponse.json()
  console.log("List of Shows", { popularShowData })
  return {
    props: {
      popularList: popularData,
      playingList: playingData,
      popularShowList: popularShowData,
    },
  }
}
