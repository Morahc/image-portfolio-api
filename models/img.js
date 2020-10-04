const mongoose = require('mongoose')

const imgSchema = mongoose.Schema({
    imgSrc: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('image', imgSchema)