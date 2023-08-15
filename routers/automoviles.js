import {Router} from 'express';
import dotenv from 'dotenv';
import { con } from "../db/atlas.js";

dotenv.config();
const appAutomoviles = Router();

appAutomoviles.get('/', async(req, res)=>{
    try {
        const db = await con(); // Obtén la conexión a la base de datos
        const Automovil = db.collection("Automovil"); // Define la colección

        const result = await Automovil.find().project({ _id: 0 }).sort({ Marca: 1, Modelo: 1 }).toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
})

export default appAutomoviles