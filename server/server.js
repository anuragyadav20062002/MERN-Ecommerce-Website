const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()

//app

const app = express()

//db

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection successful")
  })
  .catch((err) => console.log("Connection not successful", err))

//middleware

//morgan for getting request details
app.use(morgan("dev"))
app.use(bodyParser.json({ limit: "2mb" }))
app.use(cors())

//routes

app.get("/api", (req, res) => {
  res.json({
    data: "hey you hit node api",
  })
})

//listen

const port = process.env.PORT

app.listen(port, () => {
  console.log("Server runnning at port 8000")
})
