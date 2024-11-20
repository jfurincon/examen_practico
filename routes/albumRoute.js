import express from "express";
const router = express.Router();
import { crearAlbum, obtenerAlbumVarios, actualizarAlbum, eliminarAlbum, cantAlbumArtista, artistaMasAlbumes} from "../controllers/albumController.js";

router.post("/album", crearAlbum); // usa body
router.get("/album", obtenerAlbumVarios);
router.put("/album/:nombre", actualizarAlbum); // usa body
router.delete("/album/:nombre", eliminarAlbum);
router.get("/album/cantArtista", cantAlbumArtista);
router.get("/album/artistaMasAlbumes", artistaMasAlbumes);

export default router;