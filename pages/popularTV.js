import React from "react"
import { Container } from "react-bootstrap"
import TVLayout from "@/components/TVLayout"

const popularTV = ({ popularShowList }) => {
  return (
    <main>
      <Container>
        <TVLayout list={popularShowList} title="Popular TV" />
      </Container>
    </main>
  )
}

export default popularTV

export async function getServerSideProps() {
  const popularShowResponse = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=1d1f8fe4a0523780c901154040d7aa0c&`
  )
  const popularShowData = await popularShowResponse.json()
  console.log("List of Shows", { popularShowData })
  return {
    props: {
      popularShowList: popularShowData,
    },
  }
}
