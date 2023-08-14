import {Router} from 'express';
import dotenv from 'dotenv';
import { con } from "../db/atlas.js";

dotenv.config();
const appAlquileresActivos = Router();

appAlquileresActivos.get('/', async(req, res) => {
    try {
        const db = await con(); 
        const Alquiler = db.collection("Alquiler"); 

        const result = await Alquiler.aggregate([
            {
              $match: { 
                Estado: "Activo", 
              }
            },
            {
              $lookup: {
                from: "Cliente",
                localField: "ID_Cliente",
                foreignField: "id_",
                as: "Cliente"
              }
            },
            {
              $unwind: '$Cliente'
            },
            {
              $project: { 
                _id: 0,
                "Cliente._id": 0
              }
            }
          ]).toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
})

export default appAlquileresActivos