import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import styles from "../styles/LoginModal.module.scss"
import Form from "react-bootstrap/Form"

const RegisterForm = (props) => {
  const {
    login,
    setLogin,
    confirmReg,
    setConfirmReg,
    errors,
    setErrors,
    user,
    setUser,
    handleChange,
    register,
    ...rest
  } = props
  console.log("erros", errors)
  return (
    <>
      <Modal
        {...rest}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className={styles.container}>
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Register
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                // controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <>
                    {errors.username ? (
                      <p className={styles.error}>{errors.username.message}</p>
                    ) : (
                      "Username"
                    )}
                  </>
                </Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="username"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                // controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <>
                    {errors.email ? (
                      <p className={styles.error}>{errors.email.message}</p>
                    ) : (
                      "email"
                    )}
                  </>
                </Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  onChange={handleChange}
                />
                <Form.Group
                  className="mb-3"
                  // controlId="exampleForm.ControlInput1"
                ></Form.Group>
                <Form.Label>
                  <>
                    {errors.password ? (
                      <p className={styles.error}>{errors.password.message}</p>
                    ) : (
                      "Password"
                    )}
                  </>
                </Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                // controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  {errors.confirmPassword ? (
                    <p className={styles.error}>
                      {errors.confirmPassword.message}
                    </p>
                  ) : (
                    "Confirm Password"
                  )}
                </Form.Label>
                <Form.Control
                  name="confirmPassword"
                  type="password"
                  placeholder="confirm password"
                  onChange={handleChange}
                />
              </Form.Group>
              <article className={styles.registerBtn}>
                {confirmReg ? (
                  <p className={styles.success}>{confirmReg}</p>
                ) : (
                  <Button onClick={register}>Register</Button>
                )}
                <p
                  id={styles.registerLink}
                  onClick={() => props.setLogin("true")}
                >
                  Back to Login
                </p>
              </article>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>X</Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  )
}

export default RegisterForm
