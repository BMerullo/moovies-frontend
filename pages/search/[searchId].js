import React from "react"
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"

const Search = ({ results }) => {
  console.log("These are the results", results)
  return (
    <main>
      <Container>
        <ListGroup>
          {results.results
            .filter(
              (result) => result.media_type !== "person" && result.backdrop_path
            )
            .map((filter, index) => (
              <a href={`/${filter.media_type}/${filter.id}`}>
                <ListGroup.Item key={index}>
                  <img
                    className="thumbnail"
                    src={`http://image.tmdb.org/t/p/w500/${filter.poster_path}`}
                    alt="logo"
                  />
                  {filter.title} {filter.name}
                </ListGroup.Item>
              </a>
            ))}
        </ListGroup>
        <p>Hello Wooorld</p>
      </Container>
    </main>
  )
}

export default Search
export async function getServerSideProps(context) {
  console.log(context.params.searchId)
  const searchResponse = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=76e97ee4b0b9bbd10b8a54f5b87265c0&query=${context.params.searchId}`
  )
  const searchData = await searchResponse.json()

  return {
    props: {
      results: searchData,
    },
  }
}
