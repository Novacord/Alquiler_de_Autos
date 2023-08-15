import {Router} from 'express';
import dotenv from 'dotenv';
import { con } from "../db/atlas.js";
import middlewareAlquiler from '../middlewares/middlewareAlquiler.js'

dotenv.config();
const appAlquilerCosto = Router();

appAlquilerCosto.get('/:id',middlewareAlquiler,async(req, res)=>{
    try {
        const db = await con(); // Obtén la conexión a la base de datos
        const Alquiler = db.collection("Alquiler"); // Define la colección
        let id = parseInt(req.params.id);
        const result = await Alquiler.find({ id_: id }).project({ _id: 0,Costo_Total: 1 }).toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
})

export default appAlquilerCosto