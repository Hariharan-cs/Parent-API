const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json())

require('./routes/index')(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})