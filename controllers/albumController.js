import albumModel from "../models/albumModel.js";

export const crearAlbum = async (req, res) => {
    try {
        let album = new albumModel(req.body);
        await album.save();
        res.status(201).send(album);
    } catch (error) {
        console.error(error)
    }
};

export const obtenerAlbumVarios = async (req, res) => {
    try {
        let album = await albumModel.find();
        res.status(200).send(album);
    } catch (error) {
        console.error(error)
    }
};

export const actualizarAlbum = async (req, res) => {
    try {
        let name = req.params.nombre;
        let album = await albumModel.findOneAndUpdate({nombre:name}, req.body, {new:true});
        res.status(200).send(album);
    } catch (error) {
        console.error(error)
    }
};

export const eliminarAlbum = async (req, res) => {
    try {
        let name = req.params.nombre;
        await albumModel.findOneAndDelete({nombre:name});
        res.status(200).send("Album eliminado");
    } catch (error) {
        console.error(error)
    }
};

export const cantAlbumArtista = async (req, res) => {
    try {
        let agg = albumModel.aggregate([
        { $group: { artista: "$artista", cantAlbum: { $count: "$nombre" } } } // se agrupa por artista y se cuenta la cantidad de albumes
        ])
        res.status(200).send(agg);
    } catch (error) {
        console.error(error)
    }
};

export const artistaMasAlbumes = async (req, res) => {
    try {
        let agg = albumModel.aggregate([
        { $group: { artista: "$artista", cantAlbum: { $count: "$nombre" } } },
        { $sort: { cantAlbum: -1 } }, 
        { $limit: 1 }
        ])
        res.status(200).send(agg);
    } catch (error) {
        console.error(error)
    }
};



