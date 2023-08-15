import {Router} from 'express';
import dotenv from 'dotenv';
import { con } from "../db/atlas.js";
import middlewareAlquiler from '../middlewares/middlewareAlquiler.js'

dotenv.config();
const appClienteDNI = Router();

appClienteDNI.get('/:id',middlewareAlquiler,async(req, res)=>{
    try {
        const db = await con(); // Obtén la conexión a la base de datos
        const Cliente = db.collection("Cliente"); // Define la colección
        let id = req.params.id;
        const result = await Cliente.find({ DNI: id }).project({ _id: 0}).toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
})

export default appClienteDNI