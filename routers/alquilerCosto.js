import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import middlewareAlquiler from '../middlewares/middlewareAlquiler.js'

dotenv.config();
const appAlquilerCosto = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appAlquilerCosto.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appAlquilerCosto.get('/:id',middlewareAlquiler,(req, res)=>{
    con.query(
        /*sql*/`SELECT Costo_Total FROM Alquiler
                WHERE ID_Alquiler=?`,req.params.id,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appAlquilerCosto