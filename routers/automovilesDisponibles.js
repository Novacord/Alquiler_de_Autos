import { Router } from 'express';
import dotenv from 'dotenv';
import { con } from "../db/atlas.js";

dotenv.config();
const appAutomovilesDisponibles = Router();

appAutomovilesDisponibles.get('/', async(req, res) => {
    try {
        const db = await con(); 
        const Alquiler = db.collection("Alquiler"); 

        const result = await Alquiler.aggregate([
            {
              $match: { 
                Estado: "Disponible", 
              }
            },
            {
              $lookup: {
                from: "Automovil",
                localField: "ID_Automovil",
                foreignField: "id_",
                as: "Automovil"
              }
            },
            {
              $unwind: '$Automovil'
            },
            {
              $project: { 
                _id: 0,
                "Automovil._id": 0
              }
            }
        ]).toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
})

export default appAutomovilesDisponibles;



