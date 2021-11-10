const Pet = require('../model/Pet')

exports.register = async (req, res) => {
    const {
        nome,
        nascimento,
        raca,
        caracteristica,
        tamanho,
        comportamento,
        vacinado
    } = req.body

    try {
        const pet = await Pet.create({
            nome,
            nascimento,
            raca,
            caracteristica,
            tamanho,
            comportamento,
            vacinado
        })
        
        console.log(pet);
        res.status(201).json(pet);
    } catch (error) {
        console.log(error)
    }

}