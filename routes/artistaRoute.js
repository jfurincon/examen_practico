import express from 'express';
const router = express.Router();
import {crearArtista, obtenerArtistaPais} from '../controllers/artistaController.js';

router.post('/artista', crearArtista);
router.get('/artista/pais', obtenerArtistaPais);

export default router;

