const express = require('express')
var bodyParser = require('body-parser');

const routes = require('./routes/products')
const app = express()
const port = process.env.PORT || 3000


// Environment Variables Config
require('dotenv').config()

//Connect Database
const connectDatabase = require('./database/connect')

app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api/v1/products",routes)


const run = async () => {
    try {
        await connectDatabase(process.env.MONGO_URL)

        app.listen(port, () => {
            console.log(`App listening on port ${port}`)
          })
    } catch (error) {
        console.log(error)
    }
}

run()