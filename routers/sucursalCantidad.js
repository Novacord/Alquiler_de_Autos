import {Router} from 'express';
import dotenv from 'dotenv';
import { con } from "../db/atlas.js";

dotenv.config();
const appSucursalCantidad = Router();

appSucursalCantidad.get('/', async(req, res)=>{
    try {
        const db = await con(); // Obtén la conexión a la base de datos
        const Sucursal = db.collection("Sucursal"); // Define la colección

        const result = await Sucursal.aggregate([
            {
              $lookup: {
                from: "Sucursal_Automovil",
                localField: "id_",
                foreignField: "id_",
                as: "Sucursal_Automovil"
              }
            },
            {
              $project: { 
                _id: 0,
                "Sucursal_Automovil._id": 0
              }
            },
            {
              $group: {
                _id:"$id_",
                Nombre: { $first: "$Nombre"},
                Cantidad: { $first:"$Sucursal_Automovil.Direccion"},
                Direccion: { $first: "$Direccion"}
              }
            }
          ]).toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
})

export default appSucursalCantidad