const express = require('express')
const directory = require('serve-index');
const app = express()
const port = 80 // don't assume https

app.use('/', serveIndex(__dirname + '/content'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})