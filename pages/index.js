import Head from "next/head"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Carousel from "react-bootstrap/Carousel"
import PopularSidescroll from "@/components/PopularSidescroll"

const inter = Inter({ subsets: ["latin"] })

const Home = ({ popularList }) => {
  return (
    <>
      <Head>
        <title>MOOVIES</title>
        <meta
          name="description"
          content="A Community for people who like movies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <PopularSidescroll popularList={popularList} />
        </Container>
      </main>
    </>
  )
}
export default Home

export async function getServerSideProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=76e97ee4b0b9bbd10b8a54f5b87265c0`
  )
  const data = await response.json()
  // console.log(data)

  return {
    props: {
      popularList: data,
    },
  }
}
