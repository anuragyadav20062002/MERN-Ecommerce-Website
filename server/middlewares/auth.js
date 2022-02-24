const admin = require("../firebase")

exports.authCheck = async (req, res, next) => {
  // console.log(req.headers) // token

  try {
    //authorising user by token
    const firebaseUser = await admin.auth().verifyIdToken(req.headers.authtoken)
    // console.log("User in Auth Check", firebaseUser)
    req.user = firebaseUser
  } catch (err) {
    console.log(err)
    res.status(401).json({
      err: "Invalid or expired token",
    })
  }
  next()
}
