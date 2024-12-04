import Head from "next/head"
import { Inter } from "next/font/google"
import Container from "react-bootstrap/Container"
import PopularSidescroll from "@/components/PopularSidescroll"
import NowPlayingCarousel from "@/components/NowPlayingCarousel"
import PopularShowSidescroll from "@/components/PopularShowSidescroll"

const inter = Inter({ subsets: ["latin"] })

const Home = ({ popularList, playingList, popularShowList }) => {
  return (
    <>
      <Head>
        <title>MOOVIES</title>
        <meta
          name="description"
          content="A Community for people who like movies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/CowLogo13.jpeg" />
      </Head>
      <main>
        <Container>
          <NowPlayingCarousel playingList={playingList} />
          <PopularSidescroll popularList={popularList} />
          <PopularShowSidescroll popularShowList={popularShowList} />
        </Container>
      </main>
    </>
  )
}
export default Home

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
