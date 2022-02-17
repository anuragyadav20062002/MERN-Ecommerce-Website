/* eslint-disable no-unused-vars */
import React from "react"
import { useState, useEffect } from "react"
import { auth } from "../../Firebase"
import { toast } from "react-toastify"

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"))
  }, [])

  ///props history

  const handleSubmit = async (e) => {
    e.preventDefault()

    //validation

    if (!email || !password) {
      toast.error("Email and password required")
      return
    }

    if (password.length < 6) {
      toast.error("Password length should be more than 6 characters")
      return
    }
    try {
      const result = await auth.signInWithEmailLink(email, window.location.href)
      if (result.user.emailVerified) {
        //removing user email from loca storage

        window.localStorage.removeItem("emailForRegistration")

        //get user id token

        let user = auth.currentUser
        await user.updatePassword(password)
        const idTokenResult = await user.getIdTokenResult()

        //redux store
        console.log("user", user, idTokenResult)
        //redirect
        // history.push("/")
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
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
          value={password}
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
