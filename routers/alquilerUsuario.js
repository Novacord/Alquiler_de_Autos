import {Router} from 'express';
import dotenv from 'dotenv';
import { con } from "../db/atlas.js";

dotenv.config();
const appAlquilerUsuario = Router();

appAlquilerUsuario.get('/',async(req, res)=>{
    try {
        const db = await con(); // Obtén la conexión a la base de datos
        const Reserva = db.collection("Reserva"); // Define la colección
        let id = parseInt(req.params.id)
        const result = await Reserva.aggregate([
            {
              $lookup: {
                from: "Alquiler",
                localField: "id_",
                foreignField: "ID_Cliente",
                as: "Alquiler"
              }
            },
            {
              $project: { 
                _id: 0,
                "Alquiler._id": 0
              }
            }
          ]).toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
})


export default appAlquilerUsuario