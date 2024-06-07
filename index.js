const http = require("http")
const app = require("./src/config/express.config")

const server = http.createServer(
  app
)

// server.listen(process.env.PORT)
server.listen(9005, '127.0.0.1', (err) => {
  if (err) {
    console.log("Server Error...")
  } else {
    console.log("server is running on port: 9005")
    console.log("Press Ctrl+C to discontinue server.")
  }
})