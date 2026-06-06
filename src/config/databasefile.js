let mongoose = require('mongoose')

async function databasefnc(){
    try {
        let data = await mongoose.connect(process.env.Databse_uri)

        console.log('connected!')

    } catch (error) {
        console.log(error)
    }
}


module.exports = databasefnc