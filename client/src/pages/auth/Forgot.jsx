/* eslint-disable no-unused-vars */
import React from "react"
import { useState, useEffect } from "react"
import { auth } from "../../Firebase"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"

const Forgot = ({ history }) => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const config = {
      url: "http://localhost:3000/login",
      handleCodeInApp: true,
    }

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("")
        setLoading(false)
        toast.success("Check your email for rest link")
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.message)
        setLoading(false)
      })
  }

  return (
    <>
      <div className="container col-md-6 offset-md-3 p-5">
        {loading ? (
          <h4 className="text-danger">Loading...</h4>
        ) : (
          <h4 className="text-primary">Forgot Password</h4>
        )}
        <br />

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            autoFocus
          />
          <br />
          <button type="submit" className="btn btn-primary" disabled={!email}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Forgot
