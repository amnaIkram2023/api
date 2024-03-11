const express = require('express')
const app = express()
const dramaData = require('./sample.json')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Amna API")
})

app.get('/dramas', (req, res) => {
    res.send(dramaData)
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})