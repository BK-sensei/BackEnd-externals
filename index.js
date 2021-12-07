const express = require('express');
const app = express()
const axios = require('axios')
const port = 5000
const got = require('./got.json')

//--- route qui renvoie les persos de GoT depuis le fichier json
app.get('/game-of-thrones/json', (req, res, next) => {
    res.json(got)
})

//--- route qui renvoie les persos de GoT depuis l'url de l'API'
app.get('/game-of-thrones/url', (req, res, next) => {
    axios('https://thronesapi.com/api/v2/Characters')
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

//--- route permettant de renvoyer tous les pokemon
app.get('/pokemons', (req, res, next) => {
    axios("https://pokeapi.co/api/v2/pokemon?offset=300&limit=100")
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

//--- route permettant d'afficher un pokemon par son id
app.get('/pokemons/:id', (req, res, next) => {
    const id = req.params.id
    axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => res.json(response.data))
})


app.listen(port, () => {
  console.log('Server started on port: ' + port)
})