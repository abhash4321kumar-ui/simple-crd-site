require('dotenv').config()
let myexpress = require('./src/srcindex')
let databasefnc = require('./src/config/databasefile')

let PORT = 8080;

databasefnc()

myexpress.listen(PORT, function(req, res){
   console.log('server is running!')
})