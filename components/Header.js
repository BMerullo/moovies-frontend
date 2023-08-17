import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import ListGroup from "react-bootstrap/ListGroup"
import axios from "axios"
import LoginModal from "./LoginModal"

const Header = () => {
  const [modalShow, setModalShow] = useState(false)
  const [searchWord, setSearchWord] = useState("")
  const [searchResult, setSearchResult] = useState(false)
  const router = useRouter()

  const handleChange = (e) => {
    setSearchWord(e.target.value)
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=76e97ee4b0b9bbd10b8a54f5b87265c0&query=${searchWord}`
      )
      .then((res) => {
        setSearchResult(res.data.results)
      })
  }, [searchWord])
  const handleSubmit = (e) => {
    e.preventDefault()

    if (searchWord && searchResult[0]) {
      router.push(`/${searchResult[0].media_type}/${searchResult[0].id}`)
      setSearchResult(false)
    } else {
      null
    }
  }

  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <div className="title">
            <Navbar.Brand href="/">MOOVIES</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Control
                  size="sm"
                  type="search"
                  value={searchWord}
                  className="me-2"
                  aria-label="Search"
                  onChange={handleChange}
                />
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Form>
            </Nav>
            <Nav>
              <Nav.Link
                href="/"
                //  activeClass="home"
              >
                Home
              </Nav.Link>
              <NavDropdown title="Menu" id="collasible-nav-dropdown">
                <div className="nav-menu-container">
                  <NavDropdown.Item href="/popular">
                    Popular Movies
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/playing">
                    Now Playing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/popularTV">
                    Popular TV
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    variant="primary"
                    onClick={() => setModalShow(true)}
                  >
                    Log In
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link onClick={() => setModalShow(true)}>Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {searchResult ? (
          <ListGroup>
            {searchResult
              .filter(
                (result) =>
                  result.media_type !== "person" && result.backdrop_path
              )
              .map((filter, index) => (
                <a key={index} href={`/${filter.media_type}/${filter.id}`}>
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
        ) : null}
      </Container>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

export default Header
