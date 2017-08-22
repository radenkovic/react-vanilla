const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080

/**
* STATIC SERVER
* This is just static server, serves files from ./dist
* You can use it to check if your production build looks good
*/
app.use(express.static('dist'))
app.use(express.static('public'))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
