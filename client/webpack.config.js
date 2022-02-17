const Dotenv = require("dotenv-webpack")

module.exports = {
  plugins: [
    new Dotenv({
      REDIRECT_URL: "http://localhost:3000/register/complete",
    }),
  ],
}
