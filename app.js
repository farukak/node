const express = require('express')
const routes = require('./routes/products')
const app = express()
const port = 3000


app.use("/api/v1/products",routes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})