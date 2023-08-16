import React, { useState } from "react"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import { useRouter } from "next/router"
import axios from "axios"

const LoginModal = (props) => {
  const router = useRouter()
  const [login, setLogin] = useState("true")
  const [confirmReg, setConfirmReg] = useState("")
  const [errors, setErrors] = useState({})

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const register = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:8000/api/user/register", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("res.data", res.data)
        setUser({
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        })
        localStorage.setItem("user", res.data.userId)
        setConfirmReg("Succsessful! --->"),
          setErrors({}),
          console.log(errors, "errors"),
          router.push("/")
      })
      .catch((err) => {
        console.log(err, "This is the error")
        setErrors(err.response.data.errors)
        console.log(err.response.data.errors, "This")
      })
  }

  if (login === "true") {
    return <LoginForm {...props} login={login} setLogin={setLogin} />
  } else {
    return (
      <RegisterForm
        {...props}
        login={login}
        setLogin={setLogin}
        confirmReg={confirmReg}
        setConfirmReg={setConfirmReg}
        errors={errors}
        setErrors={setErrors}
        user={user}
        setUser={setUser}
        handleChange={handleChange}
        register={register}
      />
    )
  }
}

export default LoginModal
