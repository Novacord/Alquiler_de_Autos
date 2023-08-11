import { Router } from 'express';
import dotenv from 'dotenv';
import { con } from "../db/atlas.js";

dotenv.config();
const appClientes = Router();

appClientes.get('/', async (req, res) => {
    try {
        const db = await con(); // Obtén la conexión a la base de datos
        const Cliente = db.collection("Cliente"); // Define la colección

        const result = await Cliente.find().project({ _id: 0 }).toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
});

export default appClientes;