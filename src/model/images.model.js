let mongoose = require('mongoose')

let imagesschema = new mongoose.Schema({
    imageurl:String,
    imagetitle:String
})


let myimagesschema = mongoose.model('imagesdata', imagesschema)

module.exports = myimagesschema