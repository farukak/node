const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required!'
    }
})

module.exports = mongoose.model('Product',productSchema);