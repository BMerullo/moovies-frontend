import React from "react"

const UserSection = ({ userName }) => {
  return (
    <>
      <p>
        you are in the user page{" "}
        <span style={{ color: "green" }}>{userName}</span>
      </p>
    </>
  )
}

export default UserSection
