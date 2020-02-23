//  Esto se podría usar si la variable server no fuese una local
//  Ej: const server = 'http://wathever.com'
//  http.get(server, (resp) => {
//      let data = ''
//          // A chunk of data has been recieved.
//      resp.on('data', (chunk) => {
//              data += chunk;
//          })
//          // The whole response has been received. Print out the result.
//      resp.on('end', () => {
//          console.log(JSON.parse(data).explanation)
//      })
//  }).on("error", (err) => {
//      console.log("Error: " + err.message)
//  })