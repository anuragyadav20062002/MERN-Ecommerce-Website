/* eslint-disable no-unused-vars */
import React from "react"
import { useState, useEffect } from "react"
import { auth } from "../../Firebase"
import { toast } from "react-toastify"

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("")
  const [passwrd, setPassword] = useState("")

  useState(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"))
  }, [])

  ///props history

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  const completeRegisterationForm = () => {
    return (
      <form action="" onSubmit={handleSubmit}>
        <input
          placeholder="Enter Email"
          type="email"
          className="form-control"
          value={email}
          disabled
        />
        <input
          type="password"
          className="form-control"
          value={passwrd}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          autoFocus
        />
        <br />
        <button type="submit" className="register">
          COMPLETE REGISTRATION
        </button>
      </form>
    )
  }

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Register Complete</h4>

            {completeRegisterationForm()}
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterComplete
