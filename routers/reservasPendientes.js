import {Router} from 'express';
import dotenv from 'dotenv';
import { con } from "../db/atlas.js";

dotenv.config();
const appReservasPendientes = Router();

appReservasPendientes.get('/', async (req, res) => {
    try {
        const db = await con(); // Obtén la conexión a la base de datos
        const Reserva = db.collection("Reserva"); // Define la colección

        const result = await Reserva.aggregate([
            {
              $match: { 
                Estado: "Pendiente", 
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
              $lookup: {
                from: "Automovil",
                localField: "ID_Automovil",
                foreignField: "id_",
                as: "Automovil"
              }
            },
            {
              $project: { 
                _id: 0,
                "Cliente._id": 0,
                "Automovil.id": 0
              }
            }
          ]).toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
});

export default appReservasPendientes