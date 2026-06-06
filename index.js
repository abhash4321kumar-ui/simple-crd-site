require('dotenv').config()

let myexpress = require('./src/srcindex')
let databasefnc = require('./src/config/databasefile')

databasefnc()

myexpress.listen(8080, function(req, res){
   console.log('server is running!')
})