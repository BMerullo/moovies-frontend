import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import CloseButton from "react-bootstrap/CloseButton"
import axios from "axios"

const Header = () => {
  const [searchWord, setSearchWord] = useState("")
  const [searchResult, setSearchResult] = useState(false)
  const [trigger, setTrigger] = useState(false)
  const search = (e) => {
    // e.preventDefault()
    setTrigger(!trigger)
    setSearchWord(e.target.value)

    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=76e97ee4b0b9bbd10b8a54f5b87265c0&query=${searchWord}`
      )
      .then((res) => {
        setSearchResult(res.data.results)
      })

    console.log("Results from search", searchResult)
    console.log("Search Word", searchWord)
  }

  const close = () => {
    setSearchResult(false)
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
              <Form className="d-flex">
                <Form.Control
                  size="sm"
                  type="input"
                  placeholder="Search"
                  value={searchWord}
                  className="me-2"
                  aria-label="Search"
                  onChange={search}
                />
              </Form>
            </Nav>
            <Nav>
              <Nav.Link href="/" activeClass="home">
                Home
              </Nav.Link>
              <NavDropdown title="Menu" id="collasible-nav-dropdown">
                <div className="nav-menu-container">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link href="#deets">Hi Bob Merullo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {searchResult ? (
          <ListGroup>
            <ListGroup.Item>
              <Button variant="outline-primary" size="btn-sm" onClick={close}>
                Clear Results
              </Button>
            </ListGroup.Item>
            {searchResult.map((result, index) => (
              <a href={`/${result.media_type}/${result.id}`}>
                <ListGroup.Item key={index}>
                  {result.title} {result.name}
                </ListGroup.Item>
              </a>
            ))}
          </ListGroup>
        ) : null}
      </Container>
    </>
  )
}

export default Header
