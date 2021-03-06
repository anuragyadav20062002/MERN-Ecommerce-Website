/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Home from "./pages/Home"
import Header from "./components/nav/Header"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import RegisterComplete from "./pages/auth/RegisterComplete"
import { auth } from "./Firebase"
import { useDispatch } from "react-redux"
import Forgot from "./pages/auth/Forgot"

const App = () => {
  const dispatch = useDispatch()

  //to check firebase auth

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult()
        console.log(user)

        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        })
      }
    })

    // cleanup

    return () => unsubscribe()
  }, [])

  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/forgot/password" component={Forgot} />
      </Switch>
    </>
  )
}

export default App
