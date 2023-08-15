import {Router} from 'express';
import dotenv from 'dotenv';
import { con } from "../db/atlas.js";

dotenv.config();
const appTotalAlquileres = Router();

appTotalAlquileres.get('/', async(req, res)=>{
    try {
        const db = await con(); // Obtén la conexión a la base de datos
        const Alquiler = db.collection("Alquiler"); // Define la colección

        const result = await Alquiler.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: 1 }
                }
            }
        ]).toArray()
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
})

export default appTotalAlquileres