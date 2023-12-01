const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// app.use(cors());
app.use(cors({
  origin: true, // "true" will copy the domain of the request back
                // to the reply. If you need more control than this
                // use a function.

  credentials: true, // This MUST be "true" if your endpoint is
                     // authenticated via either a session cookie
                     // or Authorization header. Otherwise the
                     // browser will block the response.

  methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking
                                         // pre-flight OPTIONS requests
}));
app.use(bodyParser.json())

require('./routes/index')(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// localStorage.setItem('apiurl', 'https://auth-api.onedpo-poc.com');
// localStorage.setItem('apiurl', 'http://localhost:3000');