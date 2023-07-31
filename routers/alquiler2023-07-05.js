import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import middlewareAlquiler from '../middlewares/middlewareAlquiler.js'

dotenv.config();
const appAlquilerFecha = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appAlquilerFecha.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})


appAlquilerFecha.get('/',(req, res)=>{
    con.query(
        /*sql*/`SELECT * FROM Alquiler
                WHERE Fecha_Inicio="2023-07-05"`,req.query.id,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appAlquilerFecha