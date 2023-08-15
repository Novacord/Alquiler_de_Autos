import {Router} from 'express';
import dotenv from 'dotenv';
import { con } from "../db/atlas.js";

dotenv.config();
const appMostrarMayor5 = Router();

appMostrarMayor5.get('/',async(req, res)=>{
    try {
        const db = await con(); // Obtén la conexión a la base de datos
        const Automovil = db.collection("Automovil"); // Define la colección
        let id = req.params.id;
        const result = await Automovil.find({ Capacidad: { $gt: 5 }}).project({ _id: 0}).toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
})

export default appMostrarMayor5