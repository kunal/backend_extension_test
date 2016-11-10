var express = require('express')
var app     = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(9000)

console.log("Server started on port", 9000)
