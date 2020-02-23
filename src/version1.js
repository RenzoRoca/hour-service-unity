const express = require('express')
const moment = require('moment')
const app = express()
const port = 8080

app.get('/', (request, response) => {
    response.send(moment().format('HH:mm:ss'))
})

app.listen(port, () => console.log('Service running at http://localhost:/' + port))