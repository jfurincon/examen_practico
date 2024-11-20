import mongoose, { Schema } from "mongoose";

const albumSchema = new Schema({
    nombre:String,
    artista:String,
    year:Number
});

export default mongoose.model("Album", albumSchema);