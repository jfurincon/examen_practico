import artistaModel from "../models/artistaModel.js";

export const crearArtista = async (req, res) => {
    try {
        let artista = new artistaModel(req.body);
        await artista.save();
        res.status(201).send(artista);
    } catch (error) {
        console.error(error)
    }
};

export const obtenerArtistaPais = async (req, res) => {
    try {
        let artista = await artistaModel.find({pais:req.params.pais}); // esto quiere decir que la consulta se hará en la url
        res.status(200).send(artista);
    } catch (error) {
        console.error(error)
    }
};