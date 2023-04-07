import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

const PopularSidescroll = ({ popularList }) => {
  console.log(popularList, "This is the list of movies")
  return (
    <div>
      <h2 className="sub-title">Popular Right Now</h2>
      <div className="background-box">
        <section className="row-container">
          {popularList.results.map((movie, index) => {
            return (
              <Col>
                <div className="card-container">
                  <Card style={{ width: "10rem" }}>
                    <Card.Img
                      className="rounded "
                      variant="top"
                      src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                  </Card>
                </div>
              </Col>
            )
          })}
        </section>
      </div>
      <h2 className="sub-title">New Releases</h2>

      <Row>
        {popularList.results.map((movie, index) => {
          return (
            <Col>
              <div className="card-container">
                <Card style={{ width: "12rem" }}>
                  <Card.Img
                    className="rounded "
                    variant="top"
                    src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                </Card>
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default PopularSidescroll

// export async function getServerSideProps() {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=76e97ee4b0b9bbd10b8a54f5b87265c0`
//   )
//   const data = await response.json()
//   // console.log(data)

//   return {
//     props: {
//       popularList: data,
//     },
//   }
// }
