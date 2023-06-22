import React from "react"
import Container from "react-bootstrap/Container"
import PopularLayout from "@/components/PopularLayout"
import styles from "../styles/PopularPage.module.scss"

const popular = ({ popularList }) => {
  return (
    <main>
      <PopularLayout popularList={popularList} />
    </main>
  )
}

export default popular

export async function getServerSideProps() {
  const popularResponse = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d1f8fe4a0523780c901154040d7aa0c`
  )
  const popularData = await popularResponse.json()

  return {
    props: {
      popularList: popularData,
    },
  }
}
