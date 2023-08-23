import React from "react"
import { useRouter } from "next/router"
import axios from "axios"
import NavDropdown from "react-bootstrap/NavDropdown"

const Logout = ({ loggedIn, setLoggedIn }) => {
  const router = useRouter()
  const logout = (e) => {
    // e.preventDefault()
    axios
      .post(
        "http://localhost:8000/api/user/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res)
        console.log(res.data)
        localStorage.removeItem("user")
        localStorage.removeItem("username")
        setLoggedIn(!loggedIn)
        router.push("/")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
}

export default Logout
