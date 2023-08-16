import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import styles from "../styles/LoginModal.module.scss"
import Form from "react-bootstrap/Form"

const LoginForm = (props) => {
  const { login, setLogin, ...rest } = props
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
            <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                // controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  // onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                // controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  // onChange={handleChange}
                />
                <article className={styles.registerBtn}>
                  <Button>Login</Button>
                </article>
                <article className={styles.register}>
                  <p>
                    Not a Member?{" "}
                    <span
                      id={styles.registerLink}
                      onClick={() => props.setLogin("false")}
                    >
                      Register Here
                    </span>
                  </p>
                </article>
              </Form.Group>
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

export default LoginForm
