import mongoose, { Schema } from "mongoose";

const artistaSchema = new Schema({
    nombre:String,
    genero:String,
    pais:String
});

export default mongoose.model("Artista", artistaSchema);