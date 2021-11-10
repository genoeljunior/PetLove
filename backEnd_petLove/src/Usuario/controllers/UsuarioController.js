const Usuario = require('../model/Usuario');
const crypto = require("crypto");

exports.register = async (req, res) => {
    const {
        nome,
        sobrenome,
        email,
        senha,
        endereco,
        cidade,
        estado,
        perfil
    } = req.body;

    const cryptPass = crypto
        .createHash("sha1")
        .update(senha)
        .digest("hex");

    try {
        const usuario = await Usuario.create({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: cryptPass,
            endereco: endereco,
            cidade: cidade,
            estado: estado,
            perfil: perfil
        });
        res.status(201).json(usuario);
    } catch (e) {
        console.log(e);
    }
};