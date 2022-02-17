import React from "react"
import { useState } from "react"

const Register = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = () => {}

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
