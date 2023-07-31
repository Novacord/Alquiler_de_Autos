import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import middlewareAlquiler from '../middlewares/middlewareAlquiler.js'

dotenv.config();
const appAlquiler = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appAlquiler.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appAlquiler.get('/:id',middlewareAlquiler,(req, res)=>{
    con.query(
        /*sql*/`SELECT * FROM Alquiler
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

export default appAlquiler