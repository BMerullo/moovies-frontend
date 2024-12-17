import React, { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

const LoginModal = (props) => {
  const router = useRouter()
  const [login, setLogin] = useState("true")
  const [confirmReg, setConfirmReg] = useState("")
  const [errors, setErrors] = useState({})
  const [errorMessage, setErrorMessage] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
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

  const { onHide, loggedIn, setLoggedIn } = props

  const register = (e) => {
    e.preventDefault()

    axios
      .post("https://moovies-server.onrender.com/api/user/register", user, {
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
          console.log(errors, "errors")
        // router.push("/")
      })
      .catch((err) => {
        console.log(err, "This is the error")
        setErrors(err.response.data.errors)
        console.log(err.response.data.errors, "This")
      })
  }

  const userLogin = () => {
    axios
      .post(
        "https://moovies-server.onrender.com/api/user/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.setItem("user", res.data.userId)
        localStorage.setItem("username", res.data.userLoggedIn)
        console.log(res, "res")
        console.log(res.data, "is res data")
        router.push(`/${res.data.userLoggedIn}`)
        setEmail()
        setPassword()
        onHide()
        setLoggedIn(!loggedIn)
      })
      .catch((err) => {
        console.log(err.response.data)
        setErrorMessage(err.response.data.message)
      })
  }

  if (login === "true") {
    return (
      <LoginForm
        {...props}
        login={login}
        setLogin={setLogin}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleChange={handleChange}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        user={user}
        userLogin={userLogin}
      />
    )
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
