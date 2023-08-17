import React from "react"
import { useRouter } from "next/router"
import axios from "axios"
import Button from "react-bootstrap/Button"

const Logout = () => {
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

        router.push("/")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return <Button onClick={logout}>Logout</Button>
}

export default Logout
