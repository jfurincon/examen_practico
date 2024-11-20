import { connectDB } from "./config/database.js";
import express from 'express';
import dotenv from 'dotenv';
import albumRoute from './routes/albumRoute.js';
import artistaRoute from './routes/artistaRoute.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(express.json());

app.use(albumRoute) // aqui va las rutas importadas
