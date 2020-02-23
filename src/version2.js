// Alternative
// Esto sería teniendo abierto el puerto local, simplemente devuelve la hora
const moment = require('moment')
const port = 8081
const http = require('http')

const server = http.createServer((request, response) => {
    response.write(moment().format('HH:mm:ss'))
    response.end()
})
server.listen(port)
console.log('Service running at http://localhost:/' + port)