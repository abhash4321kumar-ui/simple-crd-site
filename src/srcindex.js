let express = require('express')
let myexpress = express()
let myimagesschema = require('./model/images.model')
let cors = require('cors')
let path = require('path')

myexpress.use(express.json())
myexpress.use(cors())
myexpress.use(express.static(path.join(__dirname, '../public')));

myexpress.post('/api', async function (req, res) {
    try {
        let { imageurl, imagetitle } = req.body

        let data = await myimagesschema.create({
            imageurl,
            imagetitle
        })

        console.log('sending data!')

        res.send(201).json({
            message: 'sending data!',
            data: data
        })

    } catch (error) {
        console.log(error)
    }
})


myexpress.get('/api', async function (req, res) {
    try {

        let data = await myimagesschema.find()
        console.log(data)

        res.status(200).json({
            message: 'getting data!',
            data: data
        })

    } catch (error) {
        console.log(error)
    }
})

myexpress.delete('/api/:urlvalue', async function (req, res) {
    try {

        let urlvalue = req.params.urlvalue

        console.log(urlvalue)

        let data = await myimagesschema.findByIdAndDelete(urlvalue)
        res.status(204).send()

    } catch (error) {
        console.log(error)
    }
})

myexpress.get('*name', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


module.exports = myexpress
