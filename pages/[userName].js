import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Logout from "@/components/Logout"

const UserPage = () => {
  const router = useRouter()
  const [id, setId] = useState()
  const userName = router.query.userName
  useEffect(() => {
    setId(localStorage.getItem("user"))
  }, [])
  return (
    <div>
      <p>
        you are in the user page{" "}
        <span style={{ color: "green" }}>{userName}</span>
      </p>
      <p>Your user ID is {id}</p>
      <Logout />
    </div>
  )
}

export default UserPage
