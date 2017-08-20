const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('dist'))

/**
* STATIC SERVER
* This is just static server, serves files from ./dist
* You can use it to check if your production build looks good
*/

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
