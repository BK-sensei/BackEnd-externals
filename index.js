const express = require('express');
const app = express()
const axios = require('axios')
const port = 5000
const got = require('./got.json')

// route qui renvoie les persos de GoT depuis le fichier json
app.get('/game-of-thrones/json', (req, res, next) => {
    res.json(got)
})

// route qui renvoie les persos de GoT depuis l'url de l'API'
app.get('/game-of-thrones/url', (req, res, next) => {
    axios('https://thronesapi.com/api/v2/Characters')
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

app.listen(port, () => {
  console.log('Server started on port: ' + port)
})