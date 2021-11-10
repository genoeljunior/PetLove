const express = require("express")
const routes = express.Router()

const UsuarioController = require('./src/Usuario/controllers/UsuarioController')
const PetController = require('./src/Pet/controllers/PetController')

routes.post('/newUser', UsuarioController.register)
routes.post('/newPet', PetController.register)

module.exports = routes