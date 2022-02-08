const mongoose = require('mongoose')

const connectDatabase = (connectionUrl) => {
    return mongoose.connect(connectionUrl);
}

module.exports = connectDatabase