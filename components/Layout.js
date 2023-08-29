import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
