const express = require("express")
const routerConfig = require("./router.config");
const { MulterError } = require("multer");

const app = express();

//parser
app.use(express.json()) // json content type

app.use(express.urlencoded({
  extended: true
})) // url encoded

app.use(routerConfig)

app.use((req, res, next) => {
  next({status: 404, message: 'Resource not found'})
})

app.use((error, req, res, next) => {

  let statusCode = error.status || 500;
  let message = error.message || "server Error..."
  let detail = error.detail || null;

  if (error instanceof MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      statusCode = 400
      detail = {
        [error.field]: "file size too large"
      }
    }
  }

  res.status(statusCode).json({
    result: detail,
    message: message,
    meta: null
  })
})

module.exports = app;