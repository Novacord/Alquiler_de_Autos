import {Router} from 'express';
import dotenv from 'dotenv';
import { con } from "../db/atlas.js";
import middlewareAlquiler from '../middlewares/middlewareAlquiler.js'

dotenv.config();
const appReservasPendientesC = Router();

appReservasPendientesC.get('/:id',middlewareAlquiler, async(req, res)=>{
    try {
        const db = await con(); // Obtén la conexión a la base de datos
        const Reserva = db.collection("Reserva"); // Define la colección
        let id = parseInt(req.params.id)
        const result = await Reserva.aggregate([
            {
              $lookup: {
                from: "Cliente",
                localField: "ID_Cliente",
                foreignField: "id_",
                as: "Cliente"
              }
            },
            {
              $project: { 
                _id: 0,
                "Cliente._id": 0
              }
            },
            {
              $match: { 
                  ID_Cliente: id, 
              }
            }
          ]).toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
})

export default appReservasPendientesC