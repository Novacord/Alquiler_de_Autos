import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import middlewareAlquiler from '../middlewares/middlewareAlquiler.js'

dotenv.config();
const appReservasPendientesC = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appReservasPendientesC.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appReservasPendientesC.get('/:id',middlewareAlquiler, (req, res)=>{
    con.query(
        /*sql*/`SELECT * FROM Reserva
                INNER JOIN Cliente ON Reserva.ID_Cliente = Cliente.ID_Cliente
                WHERE ID_Cliente = ?`,req.params.id,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appReservasPendientesC