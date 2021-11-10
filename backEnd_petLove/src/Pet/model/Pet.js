const Sequelize = require('sequelize')
const connection = require('../../database/database')

const Pet = connection.define('pet', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nascimento:{
        type: Sequelize.DATE,
        allowNull: false
    },
    raca:{
        type: Sequelize.STRING,
        allowNull: false
    },
    caracteristica:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tamanho:{
        type: Sequelize.STRING,
        allowNull: false
    },
    comportamento:{
        type: Sequelize.STRING,
        allowNull: false
    },
    vacinado:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

Pet.sync({ force: false}).then(() => {
    console.log('Pet criado com sucesso')
}).catch((err) => {
    console.log('Erro ao criar tabela pet')
})

module.exports = Pet
