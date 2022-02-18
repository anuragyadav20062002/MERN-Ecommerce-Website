/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "../../Firebase"
import { toast } from "react-toastify"

const Register = ({ history }) => {
  const [email, setEmail] = useState("")
  const { user } = useSelector((state) => ({ ...state }))

  useEffect(() => {
    if (user && user.token) {
      history.push("/")
    }
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const config = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    }

    await auth.sendSignInLinkToEmail(email, config)
    toast.success(
      `Email is sent to ${email}. Click the link to complete registeration`
    )

    //save user email in local storage

    window.localStorage.setItem("emailForRegistration", email)

    //clear state

    setEmail("")
  }

  const registerForm = () => {
    return (
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />

        <button type="submit" className="register">
          REGISTER
        </button>
      </form>
    )
  }

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Register</h4>

            {registerForm()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
