const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()
const fs = require("fs")

//app

const app = express()
app.use(express.json())

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

//routes middleware
//using file system to read directory of routes and read all routes in it
fs.readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)))

//listen

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log("Server runnning at port 8000")
})
