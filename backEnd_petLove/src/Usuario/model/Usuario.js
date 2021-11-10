const Sequelize = require('sequelize');

const connection = require('../../database/database');

const Usuario = connection.define('usuario', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    perfil: {
        type: Sequelize.STRING,
        allowNull: false
    },

});

Usuario.sync({force: false}).then(() => {
    console.log('Usuário criado com sucesso!')
}).catch((err) => {
    console.log('Erro ao criar tabela usuário!')
});

module.exports = Usuario;