const express = require("express")
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")

const app = express()
const config = require("./webpack.config.js")
const compiler = webpack(config)

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
)

const port = 3000
app.listen(port, function() {
  console.log("listening on port:", port)
})
